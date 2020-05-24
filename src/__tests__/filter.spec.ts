import { assertEquals } from "./deps.ts";
import filter from "../filter.ts";

Deno.test("should return only items satifying the predicate", () => {
  const a = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
  const b = filter(a, (x) => x > 32);
  assertEquals(b, [64, 128, 256, 512, 1024]);
});

Deno.test("should return all items", () => {
  const a = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
  const b = filter(a, (x) => x >= 1);
  assertEquals(b, a);
});

Deno.test("should an empty list", () => {
  const a: number[] = [];
  const b = filter(a, (x) => x > 32);
  assertEquals(b, []);
});
