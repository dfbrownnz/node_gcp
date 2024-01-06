const express = require('express');
const app = express();
const fs = require('fs');
const path = require(`path`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This middleware is available in Express v4.16.0 onwards

app.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'));
  });

  app.post('/submit', (req, res) => {

    const name = "bob";
    console.log(`Hey, ${name}!`);

    console.log({
      name: req.body.name,
      message: req.body.message,
    });
    //console.log( `Thanks  ${name}  for your message about ${message} !` )
    res.send( 'Thanks ' +name + '  for your message !' );
  });
  
var data = [
    {
        "id": 1,
        "name": "Leanne Graham -local as code",
        "username": "Bubba",
        "email": "Sincere@april.biz"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org"
    },
    {
        "id": 30,
        "name": "IDK yo ",
        "username": "New Improved",
        "email": "Nathan@yesenia.net"
    }
]

app.get('/', (req, res) => {
    // https://4000-cs-957240302839-default.cs-us-east1-pkhd.cloudshell.dev/?authuser=0&dfb=0 = GET / query { authuser: '0', dfb: '0' }
    console.log('GET / params', req.params);
    console.log('GET / query', req.query);
    console.log(' /submit ')
    fs.readFile("data/Users.json", "utf8", (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        //console.log(JSON.parse(data));
        res.setHeader('Content-Type', 'application/json');
        res.json(JSON.parse(data));
    });
})


app.get('/users_old', (req, res) => {
    var UsersData = JSON.parse(fs.readFileSync('data/Users.json'));
    // let rawdata = fs.readFileSync('data/Users.json');
    // let punishments= JSON.parse(rawdata);

    const name = req.params.name;
    console.log('GET params', req.params);
    console.log('query', req.query);
    var UserFilter = req.query
    console.log('UserFilter id', UserFilter['id'], UserFilter)
    // var picked = UsersData.find(myObject => Number(myObject.id) === Number(UserFilter['id'])  );
    // data=[];
    // data.push(picked);

    // sugar.js
    //picked = UsersData.remove(function(el) { return Number(el.id) === Number(UserFilter['id']); });
    // lodash.js
    UsersData = _.reject(UsersData, function (el) { return el.username === "Samantha"; });



    UsersData.forEach(element => {
        // console.log( 'For each ->', element.name);
        if (element.name === 'Leanne Graham') {
            element.username = 'Bubba';
            console.log(' made it-', element);
        }

    });
    UserSamantha = {
        "id": 30,
        "name": "IDK yo ",
        "username": "New Improved",
        "email": "Nathan@yesenia.net"
    }
    UsersData.push(UserSamantha);



    //var picked = UsersData.find(myObject => myObject.username === 'Bret');
    //var picked = lodash.filter(UsersData, { 'username': 'Bret' } );
    //console.log(data);

    let Mydata = JSON.stringify(UsersData);
    fs.writeFileSync('data/UsersB.json', Mydata);
    //data = UsersData;
    //console.log(UsersData );
    data = UsersData;

    // This will send the JSON data to the client.
    res.json(data);
})


app.get('/users', (req, res) => {

    // https://4000-cs-957240302839-default.cs-us-east1-pkhd.cloudshell.dev/users?authuser=0&dfb=0 = GET / query { authuser: '0', dfb: '0' }

    var UsersData = JSON.parse(fs.readFileSync('data/Users.json'));
    // let rawdata = fs.readFileSync('data/Users.json');
    // let punishments= JSON.parse(rawdata);

    const name = req.params.name;
    console.log('GET params', req.params);
    console.log('query', req.query);
    var UserFilter = req.query
    console.log('UserFilter id', UserFilter['id'], UserFilter)

    fs.readFile("data/Users.json", "utf8", (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        //console.log(JSON.parse(data));
        res.json(UsersData);
    });


})



app.post('/users', function (req, res) {
    var UsersData = JSON.parse(fs.readFileSync('data/Users.json'));
    const name = req.params.name;
    console.log('POST users params', req.params);
    console.log('query', req.query);
    var UserFilter = req.query
    console.log('UserFilter id', UserFilter['id'], UserFilter)
    const data = req.body;
    console.log('data ->', data);

    console.log("name: ", data.name);


    //data = UsersData ;
    res.json(UsersData);
})



// Server setup
app.listen(8080, () => {
    console.log("node server.js running on 8080 ");
});


// var http = require('http');
// var handleRequest = function(request, response) {
//   response.writeHead(200);
//   response.end("Hello World!");
// }
// var www = http.createServer(handleRequest);
// www.listen(8080);
