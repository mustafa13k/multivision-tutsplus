
var passport = require('passport');

exports.authenticate = function(req,res,next){
	res.header('Access-Control-Allow-Credentials', true);
	var auth = passport.authenticate('local',function(err,user,info){
		if(err) { return next(err); }
		if(!user) { res.send({success:false})}
		req.logIn(user,function(err){
			if(err) { return next(err);} 
			res.send({success:true,user:user});
		});
	});
	auth(req,res,next);
}