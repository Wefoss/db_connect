const fs = require('fs')
const path = require('path')

const currentFile = path.basename(__filename)

fs.readdirSync(__dirname)
.filter(file => /\.js$/.test(file) && file !== currentFile)
.forEach(file => {
    const absPath = path.resolve(__dirname, file)
    console.log(absPath);
    // const Model = require(absPath)
})