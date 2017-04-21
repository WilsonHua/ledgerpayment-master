
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendfile('./index.html');
});

app.get('.well-known/stellar.toml', function (req, res) {
  res.sendfile('./stellar.toml');
});

app.listen(80);
console.log('访问地址:localhost:80');


var express  = require("express");
var app = express();

app.use(express.static(__dirname + "/"));