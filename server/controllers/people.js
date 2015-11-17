var mongoose = require('mongoose');
var Person = mongoose.model('Person');
module.exports = {
	get_all: function(req, res){
		Person.find({}, function(err, people){
			if (err){
				console.log(err);
			} else {
				res.json(people);
			}
		});
	},
	new_person: function(req, res){
		var person = new Person({name : req.body.name});
		person.save(function(err){
			if (err){
				console.log(err);
			} else {
				res.json({});
			}
		})
	},
	remove_person: function(req, res){
		Person.remove({name : req.params.name}, function(err){
			if (err){
				console.log(err);
			} else {
				res.json({});
			}
		})
	},
}