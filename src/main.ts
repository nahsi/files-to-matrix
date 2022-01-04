import * as core from "@actions/core";
import { normalize } from "path";

export interface ActionInterface {
  map: string;
  paths: string;
}

export interface LevelMapInterface extends Array<any> {
  name: string;
  level: number;
  trim: boolean;
}

export function parseJson(str: string) {
  try {
    return JSON.parse(str);
  } catch (err) {
    core.setFailed(String(err));
  }
}

export function trimExtention(str: string) {
  return str.split(".").shift() || str;
}

export function normalizePath(p: Array<string>) {
  const withoutDot = (s: string) => s !== ".";
  const withoutEmpty = (s: string) => s.length > 0;

  return p.filter(withoutDot).filter(withoutEmpty)
}

function generateMatrix(map: LevelMapInterface, paths: Array<string>) {
  let matrix: Array<{ [key: string]: string }>;
  matrix = [];

  if (Array.isArray(paths)) {
    // loop over each path in "paths" input
    paths.forEach((path: string) => {
      let matrixElement: { [key: string]: string };
      matrixElement = {};

      // loop over path's "levels", i.e. "some" and "path" in "some/path"
      // where "some" is 0 level deep and "path" is 1 level deep
      normalize(path).split('/').forEach((level: string, depth: number) => {
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
