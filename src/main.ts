import * as core from "@actions/core";
import { normalize } from "path";

interface ActionInterface {
  map: string;
  paths: string;
}

interface LevelMapInterface extends Array<any> {
  name: string;
  level: number;
  trim: boolean;
}

function parseJson (input: string) {
  try {
    return JSON.parse(input);
  } catch (err) {
    core.setFailed(String(err));
  }
}

export function normalizePath(path: string) {
  const withoutDot = (s: string) => s !== ".";
  const withoutEmpty = (s: string) => s.length > 0;
  
  return normalize(path)
    .split('/')
    .filter(withoutDot)
    .filter(withoutEmpty)
}

function generateMatrix(map: LevelMapInterface, paths: Array<string>) {
  const trimExtention = (s: string) => s.split(".").shift() || s;

  let matrix: Array<{ [key: string]: string }>;
  matrix = [];

  if (Array.isArray(paths)) {
    // loop over each path in "paths" input
    paths.forEach((path: string) => {
      let matrixElement: { [key: string]: string };
      matrixElement = {};

      // loop over path's "levels", i.e. "some" and "path" in "some/path"
      // where "some" is 0 level deep and "path" is 1 level deep
      normalizePath(path).forEach((level: string, depth: number) => {
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
      matrix.push(matrixElement);
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

  const inputPaths = settings.paths.split(" ");
  core.debug(String(inputPaths));

  const matrix = generateMatrix(inputMap, inputPaths);
  core.notice(JSON.stringify(matrix));
  core.setOutput("matrix", JSON.stringify(matrix));
}

const action: ActionInterface = {
  map: core.getInput("map"),
  paths: core.getInput("paths"),
};

run(action);
