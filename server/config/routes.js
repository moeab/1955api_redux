var mongoose = require('mongoose');
var person = require('./../controllers/people.js');
module.exports = function(app){
	app.get('/get_all', person.get_all),
	app.post('/new_person', person.new_person),
	app.delete('/remove_person/:name', person.remove_person)
}