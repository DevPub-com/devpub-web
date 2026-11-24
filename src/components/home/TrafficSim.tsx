"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  initialServers,
  killServer,
  MAX_LEVEL,
  tickServers,
  type Server,
  type ServerStatus,
} from "@/lib/autoscale";

type Point = { x: number; y: number };
type Packet = {
  leg: "in" | "queue" | "out" | "back";
  lane: number;
  server: number;
  t: number;
  bounced: boolean;
};

const INITIAL_LEVEL = 2;
const TICK_MS = 400;
const REQUESTS_PER_LEVEL = 5;
const MAX_PACKETS = 220;
const ORANGE = "#ffa15c";

const STATUS_LABEL: Record<ServerStatus, string> = {
  off: "대기",
  boot: "켜는 중",
  on: "정상",
  down: "복구 중",
};

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (onChange: () => void) => {
  const query = matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

const along = (a: Point, b: Point, t: number): Point => {
  const u = 1 - t;
  const mid = (a.x + b.x) / 2;
  return {
    x: u ** 3 * a.x + 3 * u * t * mid + t ** 3 * b.x,
    y: (u ** 3 + 3 * u * u * t) * a.y + (3 * u * t * t + t ** 3) * b.y,
  };
};

function describe(servers: Server[], level: number) {
  const count = (status: ServerStatus) => servers.filter((s) => s.status === status).length;
  const on = count("on");
  const down = count("down");
  if (on === 0) return "켜진 서버가 없습니다. 요청은 버려지지 않고 순서를 기다립니다.";
  if (down > 0) return `서버 ${down}대가 멈췄지만, 요청은 나머지 ${on}대로 흘러갑니다.`;
  if (level > on) return "트래픽이 몰려 서버를 더 켜고 있습니다.";
  return `서버 ${on}대가 요청을 나눠 처리하고 있습니다.`;
}

export default function TrafficSim() {
  const [level, setLevel] = useState(INITIAL_LEVEL);
  const [servers, setServers] = useState(() => initialServers(INITIAL_LEVEL));
  const [touched, setTouched] = useState(false);
  const [pausedByUser, setPausedByUser] = useState<boolean | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
  const paused = pausedByUser ?? reducedMotion;

  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const live = useRef({ level, servers, paused });

  useEffect(() => {
    live.current = { level, servers, paused };
  }, [level, servers, paused]);

  useEffect(() => {
    const id = setInterval(() => setServers((s) => tickServers(s, level)), TICK_MS);
    return () => clearInterval(id);
  }, [level]);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const hubEl = hubRef.current;
    const ctx = canvas?.getContext("2d");
    if (!stage || !canvas || !hubEl || !ctx) return;

    let width = 0;
    let height = 0;
    let hubIn: Point = { x: 0, y: 0 };
    let hubOut: Point = { x: 0, y: 0 };
    let ports: Point[] = [];
    let lanes: Point[] = [];
    let packets: Packet[] = [];
    let raf = 0;
    let last = 0;
    let spawnDebt = 0;
    let turn = 0;

    const layout = () => {
      const box = stage.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio, 2);
      width = box.width;
      height = box.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const hub = hubEl.getBoundingClientRect();
      const y = hub.top - box.top + hub.height / 2;
      hubIn = { x: hub.left - box.left, y };
      hubOut = { x: hub.right - box.left, y };
      ports = Array.from(stage.querySelectorAll("[data-server]"), (el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left - box.left, y: r.top - box.top + r.height / 2 };
      });
      // 가운데 차선부터 켜지도록 중앙에서 바깥으로 번갈아 놓는다.
      lanes = Array.from({ length: MAX_LEVEL }, (_, i) => {
        const offset = Math.ceil(i / 2) * (i % 2 ? -1 : 1);
        return { x: -10, y: height / 2 + (offset * height * 0.86) / MAX_LEVEL };
      });
    };

    const step = (dt: number) => {
      const { level, servers } = live.current;
      const ready = servers.flatMap((s, i) => (s.status === "on" ? [i] : []));

      spawnDebt += dt * level * REQUESTS_PER_LEVEL;
      for (; spawnDebt >= 1; spawnDebt--) {
        if (packets.length < MAX_PACKETS) {
          const lane = Math.floor(Math.random() * level);
          packets.push({ leg: "in", lane, server: 0, t: -Math.random() * 0.2, bounced: false });
        }
      }

      packets = packets.filter((p) => {
        if (p.leg === "queue") {
          if (ready.length === 0) return true;
          p.server = ready[turn++ % ready.length];
          p.leg = "out";
          p.t = 0;
          return true;
        }
        if (p.leg === "out" && servers[p.server].status !== "on") {
          p.leg = "back";
          p.bounced = true;
        }
        p.t += p.leg === "back" ? -dt * 1.4 : dt * (p.leg === "in" ? 0.55 : 0.95);
        if ((p.leg === "in" && p.t >= 1) || (p.leg === "back" && p.t <= 0)) p.leg = "queue";
        return !(p.leg === "out" && p.t >= 1);
      });
    };

    const curve = (a: Point, b: Point) => {
      const mid = (a.x + b.x) / 2;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.bezierCurveTo(mid, a.y, mid, b.y, b.x, b.y);
      ctx.stroke();
    };

    const draw = () => {
      const { level, servers } = live.current;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1.5;
      lanes.forEach((lane, i) => {
        ctx.strokeStyle = `rgba(255,255,255,${i < level ? 0.34 : 0.1})`;
        curve(lane, hubIn);
      });
      ports.forEach((port, i) => {
        const { status } = servers[i];
        ctx.setLineDash(status === "on" ? [] : [4, 6]);
        ctx.strokeStyle =
          status === "down" ? ORANGE : `rgba(255,255,255,${status === "off" ? 0.14 : 0.4})`;
        curve(hubOut, port);
      });
      ctx.setLineDash([]);

      let queued = 0;
      for (const p of packets) {
        let at: Point;
        if (p.leg === "queue") {
          // 대기 중인 요청은 분배기 왼쪽에 격자로 쌓인다.
          const row = queued % 9;
          at = { x: hubIn.x - 10 - Math.floor(queued / 9) * 9, y: hubIn.y + (row - 4) * 9 };
          queued++;
        } else {
          const from = p.leg === "in" ? lanes[p.lane] : hubOut;
          const to = p.leg === "in" ? hubIn : ports[p.server];
          at = along(from, to, Math.max(0, p.t));
        }
        ctx.fillStyle = p.bounced ? ORANGE : "#fff";
        ctx.beginPath();
        ctx.arc(at.x, at.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!live.current.paused) step(dt);
      draw();
      raf = requestAnimationFrame(frame);
    };

    const resize = new ResizeObserver(layout);
    resize.observe(stage);
    const visibility = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (!entry.isIntersecting) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    });
    visibility.observe(stage);
    layout();

    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      visibility.disconnect();
    };
  }, []);

  const on = servers.filter((s) => s.status === "on").length;
  const load = on ? level / on : 0;

  return (
    <div className="flex flex-1 flex-col" role="group" aria-label="트래픽 시뮬레이션">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 px-6 pt-4 md:grid-cols-[minmax(0,22rem)_1fr_auto] md:gap-x-10">
        <label className="flex items-center gap-4 font-bold whitespace-nowrap">
          트래픽
          <input
            type="range"
            min={1}
            max={MAX_LEVEL}
            value={level}
            aria-valuetext={`${MAX_LEVEL}단계 중 ${level}단계`}
            onChange={(e) => {
              setTouched(true);
              setLevel(Number(e.target.value));
            }}
            className="traffic-range"
          />
        </label>
        <p role="status" className="col-span-2 row-start-2 min-h-12 content-center text-on-primary md:col-span-1 md:row-start-auto">
          {describe(servers, level)}
          {!touched && " 트래픽을 올리거나 서버를 눌러 꺼 보세요."}
        </p>
        <button
          type="button"
          onClick={() => setPausedByUser(!paused)}
          className="h-11 justify-self-start rounded-lg border border-white/50 px-4 text-sm font-bold transition-colors hover:bg-white hover:text-primary"
        >
          {paused ? "흐름 재생" : "흐름 멈추기"}
        </button>
      </div>

      <div ref={stageRef} className="relative flex mb-6 min-h-[380px] flex-1 items-center">
        <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-end px-6">
          <div
            ref={hubRef}
            className="absolute left-[34%] flex h-24 w-12 items-center justify-center rounded-lg bg-white text-center text-sm font-bold leading-tight text-primary sm:left-[46%] sm:w-16"
          >
            요청
            <br />
            분배
          </div>
          <ul className="flex w-32 flex-col gap-2 sm:w-52">
            {servers.map(({ status }, i) => (
              <li key={i}>
                <button
                  type="button"
                  data-server
                  aria-disabled={status !== "on"}
                  aria-label={`서버 ${i + 1}, ${STATUS_LABEL[status]}${status === "on" ? ", 눌러서 끄기" : ""}`}
                  onClick={() => {
                    setTouched(true);
                    setServers((s) => killServer(s, i));
                  }}
                  className={`server server-${status}`}
                >
                  {status === "on" && (
                    <span
                      aria-hidden
                      className="server-load"
                      style={{
                        transform: `scaleX(${Math.min(load, 1)})`,
                        background: load > 1 ? ORANGE : undefined,
                      }}
                    />
                  )}
                  <span className="relative">서버 {i + 1}</span>
                  <span className="relative font-normal">{STATUS_LABEL[status]}</span>
                  {status === "on" && <span className="server-hint">끄기</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
