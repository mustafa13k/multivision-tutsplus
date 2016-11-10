var mongoose = require('mongoose');

module.exports = function(config){
	mongoose.connect(config.db);
	var db = mongoose.connection;
	// db.on('error',console.error.bind(console,'connection error....'));
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open',function(){
		console.log('we are connected');
	});

	var userSchema = mongoose.Schema({
		firstName : String,
		lastName  : String,
		userName  : String,
		salt      : String,
		hashed_pwd: String
	})

	var User = mongoose.model('User',userSchema);

	User.find({}).exec(function(err,collection){
		if(collection.length == 0){
			User.create({firstName:'Mustafa',lastName:'Husain',userName:'mustu'});
			User.create({firstName:'Mohammed',lastName:'Husain',userName:'mohd'});

			User.create({firstName:'Murtaza',lastName:'Husain',userName:'murtu'});
		}
	});
}