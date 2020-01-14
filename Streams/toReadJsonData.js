var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    console.log('requested url' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream('index.html').pipe(res);
    }
    
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'Application/json' })
        var jsonObj = {
            name: 'Ram Charan',
            age: 33,
            designation: 'Actor'
        }
        var readStream = fs.createReadStream('data.json', 'utf8');
        readStream.pipe(res);
        //res.end(JSON.stringify(jsonObj)); 
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.createReadStream('about.html').pipe(res);
    }
    else
    {
        res.writeHead(404,{'Content-Type':'text/html'})
        fs.createReadStream('404.html','utf8').pipe(res);
    }
}).listen(3000);
console.log("server is running on http://127.0.0.1:3000");