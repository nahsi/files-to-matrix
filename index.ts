import * as core from 'https://jspm.dev/@actions/core@1.6.0';

const testInput = core.getInput('testInput');

async function run() {
  core.warning('Hello')
  core.debug('${testInput}')
}

run();
