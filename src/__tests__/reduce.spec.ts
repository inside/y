import { assertEquals } from "./deps.ts";
import reduce from "../reduce.ts";

Deno.test("should return the sum", () => {
  const list = [1, 2, 3];
  const sum = reduce(list, (acc, curr, index, arr) => {
    return acc + curr;
  }, 0);
  assertEquals(sum, 6);
});
