const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");

const InitiateMongoServer = require("./config/db.config");
InitiateMongoServer();

const db = require("./models");

const chalk = require("chalk");

const app = express();

var corsOptions = {
    origin: "*"
  };
app.use(cors(corsOptions));

const router = require('./router');

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api', router);


var server = app.listen(5000, function(){
    var port = server.address().port;
    console.log(chalk.bgGreen('Server is running on port',port));
});