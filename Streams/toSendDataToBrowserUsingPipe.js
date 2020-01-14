var fs=require('fs');
var http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    var readStream=fs.createReadStream('file.txt','utf8');
    //send response to browser
    readStream.pipe(res);
    //send response as helloworld to browser
//res.end("helloworld")
}).listen(3000);
console.log("server is running on http://127.0.0.1:3000/");