import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { pathToLevels } from "../src/main.ts";

Deno.test("test pathToLevels", () => {
  const result = ["some", "path"];

  const absolutePath = pathToLevels("/some/path");
  assertEquals(absolutePath, result);

  const complexPath = pathToLevels("./some/../some/path");
  assertEquals(complexPath, result);
});
