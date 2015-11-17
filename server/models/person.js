var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
	name : {
	type : String,
	trim: true,
    unique: true,
    required: true
	}
})

var person = mongoose.model('Person', peopleSchema);