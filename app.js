var express = require('express');
var app = express();
var fs = require('fs');
var page1 = fs.readFileSync(__dirname + '/index.html','utf8');
var page2 = fs.readFileSync(__dirname + '/red1.html','utf8');
var page3 = fs.readFileSync(__dirname + '/page2.html','utf8');
var page4 = fs.readFileSync(__dirname + '/red3.html','utf8');
var page5 = fs.readFileSync(__dirname + '/red5.html','utf8');
var page6 = fs.readFileSync(__dirname + '/red7.html','utf8');
var page7 = fs.readFileSync(__dirname + '/gray1.html','utf8');
var page8 = fs.readFileSync(__dirname + '/endred.html','utf8');
var page9 = fs.readFileSync(__dirname + '/rwd.html','utf8');

var port = process.env.PORT || 4000;

app.get('/', function(req, res) {
	res.send(page1);
});

app.get('/index.html', function(req, res) {
	res.send(page1);
});

app.get('/red1.html', function(req, res) {
	res.send(page2);
});

app.get('/page2.html', function(req, res) {
	res.send(page3);
});

app.get('/red3.html', function(req, res) {
	res.send(page4);
});

app.get('/red5.html', function(req, res) {
	res.send(page5);
});

app.get('/red7.html', function(req, res) {
	res.send(page6);
});

app.get('/gray1.html', function(req, res) {
	res.send(page7);
});

app.get('/endred.html', function(req, res) {
	res.send(page8);
});

app.get('/rwd.html', function(req, res) {
	res.send(page9);
});



app.listen(port);