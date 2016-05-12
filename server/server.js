;
(function () {
	"use strict";

	var config = require('../config');
	
	var PORT = config.port;
	var express = require("express");
	var expressSession = require("express-session");
	var bodyParser = require('body-parser');
	var cookieParser = require('cookie-parser');
	var mongoose = require("mongoose");
	var passport = require('passport');
	var uuid = require('node-uuid');

	// Routes
	var indexRouter = require('./routes/index');
	var localAuthRouter = require('./routes/local-auth');
	//	var postsRouter = require('./routes/posts');
	//	var rRouter = require('./routes/r');
	//	var submitRouter = require('./routes/submit');
	//	var uRouter = require('./routes/u');
	//	var subpylistRouter = require('./routes/subpylist');
	//	var commentsRouter = require('./routes/comments');


	mongoose.connect("mongodb://localhost");

	var app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(cookieParser());
	app.use(expressSession({
		secret: "THISISTHESECRET",
		resave: true,
		saveUninitialized: true
	}));

	require('./passport.js')(passport);

	app.use(passport.initialize());
	app.use(passport.session());

	// use routes
	app.use('/', indexRouter);
	app.use('/', localAuthRouter);
	//	app.use('/r', rRouter);
	//	app.use('/r', submitRouter);
	//	app.use('/u', uRouter);
	//	app.use('/posts', postsRouter);
	//	app.use('/subpylist', subpylistRouter);
	//	app.use('/comments', commentsRouter);


	app.use(express.static('public'));

	app.use(function (req, res, next) {
		res.status(404);
		res.send("File not found");
	});

	app.listen(PORT, function () {
		console.log("Server started on port " + PORT);
	});
}());