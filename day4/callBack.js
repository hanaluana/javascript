const fs = require('fs')

fs.readFile(__dirname+='/test.md', 'utf8', (error, res)=>{
    console.log(res)
})

// text = fs.readFileSync(__dirname+='/test.md', 'utf8')
// console.log(text)