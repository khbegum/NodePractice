var fs=require('fs');
fs.writeFile("wrtefiletest.txt","hey ho! let's go",(err,data)=>{
    if(err)
    throw err;
    else
    console.log('success');
})
var read=fs.readFile('wrtefiletest.txt','utf8',(err,res)=>{
    if(err)
    throw err;
    console.log(res)
    })