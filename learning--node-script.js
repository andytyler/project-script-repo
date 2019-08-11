#!/usr/bin/env node
// chmod +x change-manifesto-script.js

const exec = require('child_process').exec
const path = require('path')
const fs = require('fs')
const process = require('process')
const chalk = require('chalk')

const allParamsArray = process.argv
const paramOneIndex = process.argv.indexOf('-w')

const filepathofpack = allParamsArray[paramOneIndex + 1]

console.log(
	chalk.magenta(
		`${filepathofpack}, is the package.json that will be changed!`
	)
)
console.log(chalk.bold(allParamsArray))

// exec('cat repo-select.js', (error, stdout, stderr) => {
// 	stdout ? console.log(stdout) : console.log('nope')
// 	stderr ? console.error(stderr) : console.log('nope')
// 	error ? console.error(error) : console.log('nope')
// })

const x = {
	red: 'this is red',
	orange: 'a lovaly prange color'
}
// console.log(path.basename(__filename))

// exec('touch test-file.txt')

// const array = ['potato', 'orange', 'blue', 'black']

// while (array.length > 0) {
// 	const currentItem = array.shift()
// 	exec(`echo ${currentItem} >> test-file.txt`)
// }

var file = fs.readFileSync(filepathofpack, 'utf8')
// console.log(JSON.stringify(file).red)
// var redItem = JSON.parse(file).red
// console.log(file)
// JSON.parse(file).red = 'New Red'
const newFile = JSON.parse(file)
newFile.title = 'blast off'
console.log(chalk.gray(JSON.stringify(newFile, null, 4)))

// console.log(JSON.parse(file).red)
fs.writeFile(filepathofpack, JSON.stringify(newFile, null, 4), err => {
	err ? console.error(err) : console.log(chalk.bold.bgGreen('saved'))
})
// console.log(file)
// console.log(process.cwd())

// console.log(file.red)

process.on('exit', code => {
	console.log(chalk.bold.red(`About to exit with code ${code}`))
})
