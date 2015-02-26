var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {

    this.getData = function() {

		var url = "https://api.parse.com/1/classes/ParseQueue";
		var deferred = $q.defer();

        $http({
        	method: 'GET', 
        	url: url
        })
        .then(function (data) {

        	deferred.resolve(data);
		});
		return deferred.promise;
    };

    this.postData = function(question) {

		var url = "https://api.parse.com/1/classes/ParseQueue";
		var deferred = $q.defer();

        $http({
        	method: 'POST', 
        	url: url,
        	data: {text: question, status: 'red'}
        })
        .then(function (data) {

        	deferred.resolve(data);
		});
		return deferred.promise;
    };

    this.updateData = function(objectId, status) {

		var url = "https://api.parse.com/1/classes/ParseQueue/" + objectId;
		var deferred = $q.defer();

        $http({
        	method: 'PUT', 
        	url: url,
        	data: {status: status}
        })
        .then(function (data) {

        	deferred.resolve(data);
		});
		return deferred.promise;
    };

    this.deleteData = function(objectId) {

		var url = "https://api.parse.com/1/classes/ParseQueue/" + objectId;
		var deferred = $q.defer();

        $http({
        	method: 'DELETE', 
        	url: url
        })
        .then(function (data) {

        	deferred.resolve(data);
		});
		return deferred.promise;
    };

});