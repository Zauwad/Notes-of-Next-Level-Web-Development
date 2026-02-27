const fs = require("fs");


console.log('File reading started...')
try {
    const data = fs.readFileSync('./data/entries/diary.txt', 'utf8')    //! This is done synchronously
    console.log('Data Read:')
    console.log(data)
} catch (error) {
    console.error(error.message)
}
console.log('File reading Done!')