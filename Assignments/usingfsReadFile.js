var fs=require('fs');

var read=fs.readFile('test.txt','utf8',(err,res)=>{
if(err)
throw err;
console.log(res)
})
