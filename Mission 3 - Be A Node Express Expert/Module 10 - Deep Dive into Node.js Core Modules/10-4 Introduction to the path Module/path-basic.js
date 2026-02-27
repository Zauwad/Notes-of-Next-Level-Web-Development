const path = require('path')

console.log('Current File Info:')
console.log('File Name: ', __filename)
console.log('Dir Name:', __dirname)


console.log('\n'+ '-'.repeat(50), '\n')


const filePath = '/zawad/document/nextLevel.pdf'
console.log('Analysing path', filePath, '\n')

console.log('Dir Name: ', path.dirname(filePath))
console.log('Base Name: ', path.basename(filePath))
console.log('Extension Name: ', path.extname(filePath))
console.log('File Name: ', path.basename(filePath, path.extname(filePath))) //! Second part excludes



console.log('\n'+ '-'.repeat(50), '\n')
const parsed = path.parse(filePath)  //! Will get an object from it
console.log('Parsed Path: ',parsed)



console.log('\n'+ '-'.repeat(50), '\n')
console.log('Formatted from parse: ',path.format(parsed))