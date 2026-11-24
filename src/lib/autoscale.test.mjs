// 실행: node --test src/lib/autoscale.test.mjs
import assert from "node:assert/strict";
import { test } from "node:test";
import { initialServers, killServer, MAX_LEVEL, targetFor, tickServers } from "./autoscale.ts";

const settle = (servers, level) => {
  for (let i = 0; i < 100; i++) servers = tickServers(servers, level);
  return servers;
};
const on = (servers) => servers.filter((s) => s.status === "on").length;

test("트래픽에 맞춰 늘고 줄며, 안정되면 같은 배열을 돌려준다", () => {
  let servers = initialServers(2);
  for (const level of [MAX_LEVEL, 1, 4]) {
    servers = settle(servers, level);
    assert.equal(on(servers), targetFor(level));
    assert.equal(tickServers(servers, level), servers);
  }
});

test("서버를 전부 꺼도 스스로 복구한다", () => {
  let servers = initialServers(MAX_LEVEL);
  servers.forEach((_, i) => (servers = killServer(servers, i)));
  assert.equal(on(servers), 0);
  assert.equal(on(settle(servers, MAX_LEVEL)), targetFor(MAX_LEVEL));
});

test("켜져 있지 않은 서버는 끌 수 없다", () => {
  assert.equal(killServer(initialServers(1), 7)[7].status, "off");
});
