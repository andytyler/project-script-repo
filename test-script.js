#!/usr/bin/env node
const execSync = require('child_process').exec
const exec = require('child_process').exec
const chalk = require('chalk')

var res
async function exec2(command, options) {
    return new Promise( function (resolve, reject) {
        res =  execSync(command, options)
        resolve(res)
        reject('THIS IS AN ERROR')
    })
}

exec2('ls', '-1').then(console.log(chalk.red.bold(res.stdout)))






let result // 1
async function modernRun() { // 2
	result = await exec('ls /') // 4 start promise // 7 assign value to result
	console.log(result) // 8
}

modernRun() // 3
	.then(() => { // 5 register callback // 9 execute callback
		console.log('Once the async function has resolved')  // 10
		console.log(result.stdout) // 11
	})
console.log(result, 'Result will be undefined') // 6