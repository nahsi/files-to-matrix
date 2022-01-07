import * as core from "@actions/core";

import { walkSync } from "fs";
import { normalize, sep } from "path";
import { globToRegExp, isGlob } from "glob";

export interface ActionInterface {
  settings: string;
  files: string;
}

// deno-lint-ignore no-explicit-any
interface LevelSettingsInterface extends Array<any> {
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
  if (!rawPaths) return null

  const expandedPaths: string[] = [];
  rawPaths.split(" ").forEach((path: string) => {
    if (isGlob(path)) {
      const regexp = globToRegExp(path, { extended: true, globstar: true });
      for (const file of walkSync(".", { match: [regexp] })) {
        core.debug(`expand: ${path} -> ${file.path}`)
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

  const normalizedPath = normalize(path)
    .split(sep)
    .filter(withoutDot)
    .filter(withoutEmpty);
  core.debug(`levels: ${path} -> ${normalizedPath}`)
  return normalizedPath
}

function generateMatrix(settings: LevelSettingsInterface, paths: Array<string>) {
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
        const setting = settings.find((e) => e.level == depth);
        if (setting) {
          // if no "name" set let name be current depth
          const name = setting?.name || String(depth);
          const trim = setting?.trim || null;
          if (trim) {
            level = trimExtention(level);
          }
          matrixElement[name] = level;
        }
      });
      const exists = matrix.find((e) =>
        // javascript objects are always unique
        // convert objects to strings before comparison
        JSON.stringify(e) == JSON.stringify(matrixElement)
      );
      if (!exists) {
        matrix.push(matrixElement);
      }
    });
  }
  return matrix;
}

export function run(
  configuration: ActionInterface,
) {
  const settings: ActionInterface = { ...configuration };

  const inputSettings: LevelSettingsInterface = parseJson(settings.settings);
  core.debug(`map: ${JSON.stringify(inputSettings)}`);

  const inputFiles = preparePaths(settings.files);
  core.debug(`files: ${inputFiles}`);

  if (!inputFiles) {
    core.info("'files' input is empty. Setting matrix output to 'null'")
    core.setOutput("matrix", null);
  } else {
    const matrix = generateMatrix(inputSettings, inputFiles);
    core.info(`Generated matrix:\n${JSON.stringify(matrix, null, 2)}`);
    core.setOutput("matrix", JSON.stringify(matrix));
  }
}
