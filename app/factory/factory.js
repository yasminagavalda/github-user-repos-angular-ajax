var app = angular.module('gitSeeker')

app.factory('gitFactory', function($http) {

	var getRepos = function (username) {
		var url = 'https://api.github.com/users/' + username + '/repos'
		return $http.get(url)
		.then (function (response) {
			return response.data
		})
		.catch (function(error) {
			return 'notFound'
		})
	} 

	var getInfoUser = function (username) {
		var url = 'https://api.github.com/users/' + username
		return $http.get(url)
		.then (function (response) {
			return response.data
		})
	}

	return {
		getRepos: getRepos,
		getInfoUser: getInfoUser
	}
})