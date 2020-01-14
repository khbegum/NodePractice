var concat = require('concat-stream')
var fs = require('fs')
    
var read = fs.createReadStream('readme.md')
var write = concat(function(data) {
    
})
    
read.pipe(write)