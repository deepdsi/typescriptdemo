// var http = require('http');
// var express = require("express");
// let ejs = require('ejs');
// let path = require('path');
// var base_dirname: any = __dirname;
// var urlHanlder: any = require('./classes/urlclass.js');


var { http, express, urlHanlder } = require("./module");


var app = express();
var server: any = http.createServer(app);
app.set('env', 'production');

server.listen(3000);

urlHanlder.BindWithCluster(app);