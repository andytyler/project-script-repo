#!/usr/bin/env node
const exec = require('child_process').exec
const path = require('path')
const fs = require('fs')
const process = require('process')

const allParamsArray = process.argv
const paramOneIndex = process.argv.indexOf('-w')

const filepathofpack = allParamsArray[paramOneIndex + 1]

console.log(`${filepathofpack}, is the package.json that will be changed!`)
console.log(allParamsArray)

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

var file = fs.readFileSync('test-File.json', 'utf8')
// console.log(JSON.stringify(file).red)
var redItem = JSON.parse(file).red
// console.log(file)
JSON.parse(file).red = 'New Red'
const newFile = JSON.parse(file)
newFile.red = 'blast'
console.log(newFile)

// console.log(JSON.parse(file).red)
fs.writeFile('test-File.json', JSON.stringify(newFile, null, 4), err => {
	err ? console.error(err) : console.log('save')
})
// console.log(file)
// console.log(process.cwd())

// console.log(file.red)

process.on('exit', code => {
	console.log(`About to exit with code ${code}`)
})
