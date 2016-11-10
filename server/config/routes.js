var express  = require('express'),
	auth     = require('./auth');
	//mongoose = require('mongoose');

module.exports = function(app){

	// app.get('/partials/:partialPath',function(req,res){
	// 	res.render('partials/' + req.params.partialPath);
	// 	//console.log('here');
	// });

	// app.get('/partials/*',function(req,res){
	// 	res.render('../../public/app' + req.params);
	// 	console.log(__dirname);
	// });

	// app.get('/partials/account/:path',function(req,res){
	// 	res.render('partials/account/' + req.params.path);
	// });

	app.get('/partials/*', function(req, res) {
		res.render('../../public/app/' + req.params[0]);
		//console.log(req.params);
	});

	app.post('/login', auth.authenticate);

	app.get('*',function(req,res) {
		res.render('index'); 
	});
}
