import { pathToLevels } from "../src/main";

test("test pathToLevels", () => {
  const result = ["some", "path"]

  const absolutePath = pathToLevels("/some/path");
  expect(absolutePath).toStrictEqual(result);

  const complexPath = pathToLevels("./some/../some/path");
  expect(complexPath).toStrictEqual(result);
});
