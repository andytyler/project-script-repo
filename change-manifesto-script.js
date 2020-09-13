#!/usr/bin/env node
const execSync = require('child_process').exec
const exec = (command, options) => {
  return new Promise((resolve, reject) => {
    execSync(command, options, (error, stdout, stderr) => {
      if (error) {
		console.log('Rejecting', command, options, error)
    	reject(new Error(error.message))
      } else {
        resolve({
          stdout: (stdout || '').trim(),
          stderr: (stderr || '').trim()
        })
      }
    })
  })
}

async function exec2(command, options) {
	try {
		const res = await execSync(command, options, (err, so, se) => {
			return result = {
				err: err,
				stdout: so,
				stderr: se
			}
		})
		console.log(chalk.red.bold('MEGGA BOOM', res))
	} 
	catch(er) {
		console.error(er);
	}
}

exec2('ls', '-1')


function run() {
	const somePromise = makeMePromise()
	somePromise
		.then((result) => {
			console.log(result)
		})
}

let result // 1
async function modernRun() { // 2
	result = await exec('ls /') // 4 start promise // 7 assign value to result
	console.log(result) // 8
}

modernRun() // 3
	.then(() => { // 5 register callback // 9 execute callback
		console.log('Once the async function has resolved')  // 10
		console.log(result) // 11
	})
console.log(result, 'Result will be undefined') // 6


const path = require('path')
const fs = require('fs')
const process = require('process')
const chalk = require('chalk')


async function doTheStuff() {

	const args = process.argv
	const minusFlag = args.indexOf('-r')
	const repoDirectory = args[minusFlag + 1]
	
	minusFlag < 2
		? console.log(chalk.red.bold('Must supply directory with -r flag'))
		: console.log(chalk.green(repoDirectory))
	
	var list = 0
	// exec(`ls ${repoDirectory}`, async (err, stdOut, stdErr) => {
	// 	list = await stdOut
	// 	console.log(list)
	// })
	
	// const str = ls.stdout._events.data
	// const res = str()
	// console.log(res)
	
	// preq: have a list of directories
	const listOfRepos = ['act-test-networking', 'act-test-cors', 'act-test-fonts']
	
	// for each repo folder
	//      go into repo folder
	//      stash changes if you need to
	//      checkout master
	//      make new branch
	
	try {
		console.log((await exec(`ls ${repoDirectory}`)).stdout)
		listOfRepos.forEach(async (repo, index) => {
			const result = await exec(`ls ${repo}`)
			console.log(index, result)
			console.log(`${index} inside ${repo}`)
			//const result = await exec(`ls`)
			//console.log(index, repo, result)
		})
	}
	catch(ex) {
		console.error('Do the stuff:', ex)
	}
	
	function doChanges() {
		exec('ls', (e, so, se) => {
			so ? console.log(chalk.magenta(so)) : console.log('nope')
		})
	}

}

doTheStuff()

// get list of ACTable folders that are in src

// for each ACTable test folder
// read file
// make edits to file
// write edits to file

// git add .
// commit 'changed manifest.json'

// when all folders have been changed and no more are left do git push
// hub create pull-request
// say finnished when all repos have been been through.
