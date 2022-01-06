import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { pathToLevels, preparePaths } from "../src/lib.ts";

Deno.test("test pathToLevels", () => {
  const result = ["some", "path"];

  const absolutePath = pathToLevels("/some/path");
  assertEquals(absolutePath, result);

  const complexPath = pathToLevels("./some/../some/path");
  assertEquals(complexPath, result);
});

Deno.test("test preparePaths", () => {
  const glob = preparePaths("tests/**");
  assertEquals(glob, ["tests/main.test.ts"]);
});
