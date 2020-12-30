/* This is the starting point of my server */ 

var express = require('express'); //loaded
var app = express();
var bodyParser = require('body-parser'); //loaded

app.use(bodyParser.json());

var port = 3000; 
var hostname = "127.0.0.1";

var cors = function (req, res, next)
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(cors);

// import routes
const weddingRoutes = require('./routes/weddingRoutes');
app.use(weddingRoutes);

//set server listen spesific port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});