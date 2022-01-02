import * as core from '@actions/core'

const testInput = core.getInput('testInput')

async function run(): Promise<void> {
  core.warning(`Hello`)
  core.warning(`${testInput}`)
}

run()
