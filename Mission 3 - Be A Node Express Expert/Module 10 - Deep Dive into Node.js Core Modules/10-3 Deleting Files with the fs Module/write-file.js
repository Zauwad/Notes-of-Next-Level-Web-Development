const fs = require('fs')


//! Synchronously writing on file
const content1 = 'This is content 1. \n synchronously writting!'
console.log('Starting to write....')
try {
    fs.writeFileSync('./output/output-sync.txt',content1)
} catch (error) {
    console.error(error.message)   
}
console.log('Written in file!!')




//! Asynchronously writing on file
const content2 = 'This is content2. \n Asynchronously writing!'
console.log('Starting to write Asynchronously....')
fs.writeFile('./output/output-async.txt', content2, (error)=>{
    if(error){
        console.error(error.message)
    }else{
        console.log('written file Asynchronously!')
    }
})