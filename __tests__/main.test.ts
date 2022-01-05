import { normalizePath } from "../src/main";

test("test normalizePath", () => {
  const result = ["some", "path"]

  const absolutePath = normalizePath("/some/path");
  expect(absolutePath).toStrictEqual(result);

  const complexPath = normalizePath("./some/../some/path");
  expect(complexPath).toStrictEqual(result);
});
