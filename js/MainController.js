var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService) {

  	$scope.getData = function() {

    	parseService.getData()
    	.then(function(questions){

    		console.log(questions);
    		$scope.questions = questions.data.results;

    	});
  	};

	$scope.postData = function() {

    	parseService.postData($scope.question)
    	.then(function(results){

    		$scope.getData();
    		$scope.question = '';
    	});
  	};

  	$scope.deleteData = function(question) {

    	parseService.deleteData(question.objectId)
    	.then(function(results){

    		$scope.getData();
    	});
  	};

  	$scope.changeStatus = function(question) {
  		console.log(question);
  		question.status = "yellow";
  		parseService.updateData(question.objectId, question.status)
  		.then(function(results) {

  			$scope.getData();
  		});
  	};

});