#!/usr/bin/env node

const exec = require('child_process').exec
const path = require('path')
const fs = require('fs')
const process = require('process')
const chalk = require('chalk')

// preq: run inside of list of repo directory

// have list of repos that want changing
// get current working directory
// use path to join cwd with repo name
var newReposList = 4
function run() {
	const listOfRepos = ['act-test-ecmascript', 'act-test-networking']

	const cwd = process.cwd()

	newReposList = listOfRepos.map(repoName => {
		repoName + 'HELLO'
	})
}
run()
console.log(newReposList)

// preq: have a list of directories

// for each repo folder
//      go into repo folder
//      stash changes if you need to
//      checkout master
//      make new branch

// get list of ACTable folders that are in src

// for each ACTable test folder
//      read file
//      make edits to file
//      write edits to file

// git add .
// commit 'changed manifest.json'

// when all folders have been changed and no more are left do git push
// hub create pull-request
// say finnished when all repos have been been through.
