var fs=require('fs');
fs.writeFile('writeTest.txt',"'hey ho! let's go' The file was saved!",(err,data)=>{
    if(err)
    throw err;
    else
    console.log('Success data is write into Other File');
})