import { getInput } from "@actions/core";
import { ActionInterface, run } from "./src/lib.ts";

const action: ActionInterface = {
  map: getInput("map", { required: true }),
  files: getInput("files", { required: true }),
};

run(action);
