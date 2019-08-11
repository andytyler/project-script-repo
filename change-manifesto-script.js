#!/usr/bin/env node
const exec = require('child_process').exec

const path = require('path')
const fs = require('fs')
const process = require('process')
const chalk = require('chalk')

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

exec(`cd ${repoDirectory}`)
listOfRepos.forEach(repo => {
	exec(`cd ${repo}`, '~')
	console.log(`inside ${repo}`)
	exec(`ls`, (err, so, se) => {
		console.log(so)
	})
})

function doChanges() {
	exec('ls', (e, so, se) => {
		so ? console.log(chalk.magenta(so)) : console.log('nope')
	})
}

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
