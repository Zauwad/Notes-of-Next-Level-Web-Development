const fs = require('fs')


//! Synchronously
fs.writeFileSync('./output/temp.txt', 'This is a temporary file')
console.log('File Created...')


if(fs.existsSync('./output/temp.txt')){
    console.log('File exists!!')

    fs.unlinkSync('./output/temp.txt')
    console.log('File Deleted!')
}

try {
    fs.unlinkSync('./output/temp.txt')  //! Wont work since file already deleted once
} catch (error) {
    console.error(error.message)
    console.log('File Not Found')
}



//! Asynchronously
fs.writeFile('./output/temp2.txt', 'This is another temporary file', (error)=>{
    if(error) return console.error(error.message)
    
    console.log('Another Temp File Created...')
    fs.unlink('./output/temp2.txt', (error)=>{
        if(error) return console.error(error.message)

            console.log('New temp file deleted!')
    })
})


