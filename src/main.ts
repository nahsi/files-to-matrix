import * as core from "@actions/core";

import { walkSync } from "https://deno.land/std@0.120.0/fs/mod.ts";
import { normalize } from "https://deno.land/std@0.120.0/path/mod.ts";
import {
  globToRegExp,
  isGlob,
} from "https://deno.land/std@0.120.0/path/glob.ts";

interface ActionInterface {
  map: string;
  paths: string;
}

// deno-lint-ignore no-explicit-any
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

export function preparePaths(rawPaths: string) {
  const expandedPaths: string[] = [];
  rawPaths.split(" ").forEach((path: string) => {
    if (isGlob(path)) {
      const regexp = globToRegExp(path, { extended: true, globstar: true });
      for (const file of walkSync(".", { match: [regexp] })) {
        expandedPaths.push(file.path);
      }
    } else {
      expandedPaths.push(path);
    }
  });
  return [...new Set([...expandedPaths])];
}

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

  const matrix: Array<{ [key: string]: string }> = [];

  if (Array.isArray(paths)) {
    // loop over each path in "paths" input
    paths.forEach((path: string) => {
      const matrixElement: { [key: string]: string } = {};

      // loop over path's "levels", i.e. "some" and "path" in "some/path"
      // where "some" is 0 level deep and "path" is 1 level deep
      pathToLevels(path).forEach((level: string, depth: number) => {
        // find settings for current level in "map" input
        // first found setting is used
        const setting = map.find((e) => e.level == depth);
        if (setting) {
          // if no "name" set const name be current depth
          const name = setting?.name || String(depth);
          const trim = setting?.trim || null;
          if (trim) {
            level = trimExtention(level);
          }
          matrixElement[name] = level;
        }
      });
      const exists = matrix.find((e) =>
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

function run(
  configuration: ActionInterface,
) {
  const settings: ActionInterface = { ...configuration };

  const inputMap: LevelMapInterface = parseJson(settings.map);
  core.debug(JSON.stringify(inputMap));

  const inputPaths = preparePaths(settings.paths);
  core.debug(String(inputPaths));

  const matrix = generateMatrix(inputMap, inputPaths);
  core.notice(JSON.stringify(matrix));
  core.setOutput("matrix", JSON.stringify(matrix));
}

const action: ActionInterface = {
  map: core.getInput("map", { required: false }),
  paths: core.getInput("paths", { required: false }),
};

run(action);
