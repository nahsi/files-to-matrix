import * as core from 'https://jspm.dev/@actions/core@1.6.0';

const myInput = core.getInput('testInput', {required: true});

async function run() {
  console.log(myInput)
}

run();
