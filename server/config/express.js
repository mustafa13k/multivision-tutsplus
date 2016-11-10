var express    = require('express'),
	stylus     = require('stylus'),
	path       = require('path'),
	bodyParser = require('body-parser'),
	logger     = require('morgan'),
	passport   = require('passport');
	cookieParser = require('cookie-parser');
	session    = require('express-session');

module.exports = function(app,config){
	function compile(str,path){
		return stylus(str)
			  .set('filename',path);
	}

	app.set('views',path.join(config.rootPath + '/server/views/'));
	app.set('view engine' , 'jade');
	app.use(stylus.middleware({
		src : config.rootPath + '/public',
		dest : config.rootPath + '/public',
		compile : compile
	}
	));
	app.use(express.static(path.join(config.rootPath + '/public')));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(cookieParser());
	app.use(session({ secret: 'multivision',saveUninitialized:false,resave:false}));
	app.use(passport.initialize());
	app.use(passport.session());
	 
}
