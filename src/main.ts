import * as core from "@actions/core";
// import * as glob from "glob";
import { normalize } from "https://deno.land/std/node/path.ts";

interface ActionInterface {
  map: string;
  paths: string;
}

interface LevelMapInterface extends Array<any> {
  name: string;
  level: number;
  trim: boolean;
}

function parseJson(input: string) {
  try {
    return JSON.parse(input);
  } catch (err) {
    core.setFailed(String(err));
  }
}

// export function preparePaths(rawPaths: string) {
//   let expandedPaths: string[] = []
//   rawPaths.split(" ").forEach((path: string) => {
//     let files = glob.sync(path, { nonull: true })
//     expandedPaths = [...new Set([...expandedPaths , ...files])];
//   })
//   return expandedPaths;
// }

export function pathToLevels(path: string) {
  const withoutDot = (s: string) => s !== ".";
  const withoutEmpty = (s: string) => s.length > 0;

  return normalize(path)
    .split("/")
    .filter(withoutDot)
    .filter(withoutEmpty);
}

function generateMatrix(map: LevelMapInterface, paths: Array<string>) {
  const trimExtention = (s: string) => s.split(".").shift() || s;

  let matrix: Array<{ [key: string]: string }> = [];

  if (Array.isArray(paths)) {
    // loop over each path in "paths" input
    paths.forEach((path: string) => {
      let matrixElement: { [key: string]: string } = {};

      // loop over path's "levels", i.e. "some" and "path" in "some/path"
      // where "some" is 0 level deep and "path" is 1 level deep
      pathToLevels(path).forEach((level: string, depth: number) => {
        // find settings for current level in "map" input
        // first found setting is used
        let setting = map.find((e) => e.level == depth);
        if (setting) {
          // if no "name" set let name be current depth
          let name = setting?.name || String(depth);
          let trim = setting?.trim || null;
          if (trim) {
            level = trimExtention(level);
          }
          matrixElement[name] = level;
        }
      });
      let exists = matrix.find((e) =>
        // javascript objects are are always unique
        // so we convert objects to strings to compare
        JSON.stringify(e) == JSON.stringify(matrixElement)
      );
      if (!exists) {
        matrix.push(matrixElement);
      }
    });
  }
  return matrix;
}

async function run(
  configuration: ActionInterface,
): Promise<void> {
  const settings: ActionInterface = { ...configuration };

  const inputMap: LevelMapInterface = parseJson(settings.map);
  core.debug(JSON.stringify(inputMap));

  // const inputPaths = preparePaths(settings.paths);
  const inputPaths = settings.paths.split(" ")
  core.debug(String(inputPaths));

  const matrix = generateMatrix(inputMap, inputPaths);
  core.notice(JSON.stringify(matrix));
  core.setOutput("matrix", JSON.stringify(matrix));
}

const action: ActionInterface = {
  map: core.getInput("map", {required: false}),
  paths: core.getInput("paths", {required: false}),
};

run(action);
