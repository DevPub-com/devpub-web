export type ServerStatus = "off" | "boot" | "on" | "down";
export type Server = { status: ServerStatus; wait: number };

export const SERVER_COUNT = 8;
export const MAX_LEVEL = SERVER_COUNT - 1;
const BOOT_TICKS = 2;
const DOWN_TICKS = 7;

// 트래픽 1단계당 서버 1대, 장애에 대비해 1대를 더 켜 둔다.
export const targetFor = (level: number) => Math.min(SERVER_COUNT, level + 1);

export const initialServers = (level: number): Server[] =>
  Array.from({ length: SERVER_COUNT }, (_, i) => ({
    status: i < targetFor(level) ? "on" : "off",
    wait: 0,
  }));

export const killServer = (servers: Server[], index: number): Server[] =>
  servers.map((s, i) =>
    i === index && s.status === "on" ? { status: "down", wait: DOWN_TICKS } : s,
  );

/** 한 틱 진행한다. 바뀐 것이 없으면 같은 배열을 돌려줘 리렌더를 막는다. */
export function tickServers(servers: Server[], level: number): Server[] {
  let changed = false;
  const next = servers.map((s): Server => {
    if (s.status !== "boot" && s.status !== "down") return s;
    changed = true;
    if (s.wait > 1) return { ...s, wait: s.wait - 1 };
    return s.status === "boot"
      ? { status: "on", wait: 0 }
      : { status: "boot", wait: BOOT_TICKS };
  });

  const active = next.filter((s) => s.status === "on" || s.status === "boot").length;
  const target = targetFor(level);
  const index =
    active < target
      ? next.findIndex((s) => s.status === "off")
      : active > target
        ? next.findLastIndex((s) => s.status === "on")
        : -1;
  if (index >= 0) {
    changed = true;
    next[index] =
      active < target ? { status: "boot", wait: BOOT_TICKS } : { status: "off", wait: 0 };
  }
  return changed ? next : servers;
}
