const http = require('http');
const fs = require('fs');
// const http = require('http');

const port = process.env.PORT || 3000;
// console.log(port)

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> This is Sandeep Singh</h1><p> Hey this is the way </p>')
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> About Sandeep Singh</h1><p> Hey this is about sandeep singh </p>')
    }
    else if (req.url == '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString())
    }
    else {
        // res.harry();
        res.statusCode = 404;
        res.end('<h1>Not Found </h1><p> This page is not found on this server</p>')
    }

});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});