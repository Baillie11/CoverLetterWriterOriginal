const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;



//const server = http.createServer((req, res) => {
//    fs.readFile('index.html', (err, data) => {
//        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });

//        res.write(data);
//        res.end();
//    });
//});

const server = http.createServer((req, res) => {

    const now = new Date();
    const timeNow = now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<H1>Hello</H1>");
    res.write("<P>Time Is :" + timeNow + "</P>");

    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});