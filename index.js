'use strict';

global.rootDir = __dirname;

require("dotenv").config();
require('./utils/envSetting');


const utils = require(rootDir + "/utils/");
const bodyParser = require("body-parser");
const express = require("express");
const multer = require('multer');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));


var upload = multer();
var storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './files');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

upload = multer({
    limits: {
        fileSize: 100 * 1024 * 1024,
        files: 25
    }, storage: storage
});

app.use(upload.any());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});


const apis = require("./src");
app.use("/api", apis);


const response = utils.response
app.use(function (err, req, res, next) {
    if (!err.statusCode)
        err.statusCode = 500;
    response.failed(res, err.statusCode, err.message);
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server is running!!!!");
});

