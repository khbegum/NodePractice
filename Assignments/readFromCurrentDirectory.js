var fs=require('fs');
var path=require('path');
var directoryPath=path.join(__dirname,"/wrtefiletest.txt");
fs.readFile(directoryPath,'utf8',(err,res)=>{
    if(err)
    throw err;
    else
    console.log(res);
})
//C:\Users\khbegum\Documents\NodePractice\Assignments\wrtefiletest.txt