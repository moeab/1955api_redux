var app = angular.module('dashboard', []);

app.factory('peopleFactory', function($http){
	var factory = {};
	factory.getPeople = function(callback){
		$http.get('/get_all').success(function(people){
			callback(people);
		})
	}
	factory.addPerson = function(info, callback){
		$http.post('/new_person', info).success(function(){
			callback();
		})
	}
	factory.removePerson = function(name, callback){
		$http.delete('/remove_person/' + name).success(function(){
			callback()
		})
	}
	return factory;
})
app.controller('peopleController', function($scope, peopleFactory){
	$scope.getPeople = function() {
		peopleFactory.getPeople(function(data){
		$scope.people = data;
		})
	}
	$scope.getPeople();
	$scope.addPerson = function(){
		if(typeof $scope.name != 'undefined' && $scope.name != '') {
			peopleFactory.addPerson({name : $scope.name}, $scope.getPeople);
			$scope.name = '';
			$scope.error = '';
		} else {
                $scope.error = 'Field cannot be empty';
        }
	}
	$scope.removePerson = function(name){
		peopleFactory.removePerson(name, $scope.getPeople);
	}
})