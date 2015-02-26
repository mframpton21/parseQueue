var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
	return {
        request: function (config) {
        	config.headers = {'X-Parse-Application-Id': 'nqpEiXJpC2VbGNnOsFqmrcpBMGaGwJcRYamT7V6U', 'X-Parse-REST-API-Key': '6SfX7xkdbXJZ3kk5MeaHel9JYWIm5kiI4wKC1LC4'}
        
        	return config;
        }
    };
});