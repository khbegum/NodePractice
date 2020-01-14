var http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    
    res.end("Success, i'm listening from port: 3000")
   
}).listen(3000);
console.log('connected')