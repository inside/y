import { assertEquals } from "./deps.ts";
import bind from "../bind.ts";

Deno.test("original and bound function should return identical values", () => {
  const sum = (a: number, b: number) => {
    return a + b;
  };
  const boundSum = bind(sum, null, 1, 2);
  assertEquals(sum(1, 2), boundSum());
});

Deno.test("should change the context", () => {
  function greeter(this: { name: string }, greet: string, name: string) {
    return `${greet} ${name}, my name is ${this.name}`;
  }
  const a = greeter.call({ name: "Wayne" }, "hi", "John");
  const b = greeter.call({ name: "Elliot" }, "hi", "John");
  assertEquals(
    [a, b],
    ["hi John, my name is Wayne", "hi John, my name is Elliot"],
  );
});
