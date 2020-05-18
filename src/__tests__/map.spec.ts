import { assertEquals } from "./deps.ts";
import map from "../map.ts";

Deno.test("should double each list item", () => {
  const a = [1, 2, 3];
  const b = map(a, (x) => x * 2);
  assertEquals(b, [2, 4, 6]);
});

Deno.test("should return an empty list", () => {
  const a: number[] = [];
  const b = map(a, (x) => x * 2);
  assertEquals(b, []);
});
