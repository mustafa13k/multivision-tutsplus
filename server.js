var express    = require('express'),
	stylus     = require('stylus'),
	bodyParser = require('body-parser'),
	logger     = require('morgan');
	path  	   = require('path'),
	mongoose   = require('mongoose'),
	passport   = require('passport'),
	LocalStrategy  = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app,config);

require('./server/config/routes')(app);

require('./server/config/mongoose')(config);


var User = mongoose.model('User');

//console.log(User);



passport.use(new LocalStrategy(function(username,password,done){
	//console.log(username);
	console.log('here');
	User.findOne({ userName : username }).exec(function(err,user){
		//console.log(user);
		if(user){
			return done(null,user);
		}else{
			return done(null,false);
		}
	})
}));


passport.serializeUser(function(user,done){
	if(user){
		done(null,user.id);
	}
});

passport.deserializeUser(function(id,done){
	User.findById(id,function(err,user){
		done(err,user);
	});
});













app.listen(config.port);

console.log("Listening on " + config.port);