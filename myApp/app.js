// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const http=require('http');
http.createServer((req,res)=>{
  var body="this is the body of the jhjhcontent";
  var content_length=body.length;
  res.writeHead(200,{'Content-Type':'text/plain','Content-Length':content_length});
  res.end(body);

}).listen(3000);
console.log("server running on http://127.0.0.1:3000/");
//global object prints after 3000secs

//setTimeout(()=>{console.log("server running on http://127.0.0.1:3000/");},3000)
