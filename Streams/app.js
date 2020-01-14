var fs=require('fs');
var readStream=fs.createReadStream('file.txt','utf8');
var writeStream=fs.createWriteStream('write_file.txt')
var data='hi';
readStream.on('data',(chunk)=>{
    console.log("------======================================START====================================-----------")
    //data+=chunk;
    writeStream.write(chunk)
//console.log(chunk);
});
readStream.on('end',(chunk)=>{
    //console.log(data);
console.log("----------end----------------")
})