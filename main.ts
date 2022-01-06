import { getInput } from "@actions/core";
import { ActionInterface, run } from "./src/lib.ts";

const action: ActionInterface = {
  settings: getInput("settings", { required: true }),
  files: getInput("files", { required: true }),
};

run(action);
