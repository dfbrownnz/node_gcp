

const express = require('express');
const app = express();
const fs = require('fs');
const path = require(`path`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This middleware is available in Express v4.16.0 onwards

app.get('/', (req, res) => {
    // https://4000-cs-957240302839-default.cs-us-east1-pkhd.cloudshell.dev/?authuser=0&dfb=0 = GET / query { authuser: '0', dfb: '0' }
    console.log('GET / params', req.params);
    console.log('GET / query', req.query);
    console.log(' /submit ')
    data={
        "name": "champion"
    }
    res.setHeader('Content-Type', 'application/json');
    //res.json(JSON.parse(data));
    res.json(data);

    // fs.readFile("data/Users.json", "utf8", (error, data) => {
    //     if (error) {
    //         console.log(error);
    //         return;
    //     }
    //     //console.log(JSON.parse(data));
    //     res.setHeader('Content-Type', 'application/json');
    //     res.json(JSON.parse(data));
    // });

})


  

// Server setup
app.listen(8080, () => {
    console.log("node server.js running on 8080 ");
});

//   const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 8080;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
