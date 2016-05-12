;
(function () {
	"use strict";

	var PORT = 3000;
	var express = require("express");
	var expressSession = require("express-session");
	var bodyParser = require('body-parser');
	var cookieParser = require('cookie-parser');
	var mongoose = require("mongoose");
	var passport = require('passport');
	var uuid = require('node-uuid');
	
	mongoose.connect("mongodb://localhost");

	var app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(cookieParser());
	app.use(expressSession({secret: "THISISTHESECRET", resave: true, saveUninitialized: true}));

	app.get("/", function (req, res) {
		res.sendFile(__dirname + "/public/index.html");
	});
	
	
	app.use(express.static('public'));

	app.use(function (req, res, next) {
		res.status(404);
		res.send("File not found");
	});

	app.listen(PORT, function () {
		console.log("Server started on port " + PORT);
	});
}());
