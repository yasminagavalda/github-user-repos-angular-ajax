var app = angular.module('gitSeeker')
app.controller('searchController', function($scope, gitFactory) {

	$scope.searchUsers = function () {
		$scope.userNotFound = ''
		$scope.avatar = ''
		$scope.found = ''
		gitFactory.getRepos($scope.username)
		.then(function(response) {
			if (response === 'notFound') {
				$scope.userNotFound = 'User ' + $scope.username + ' not found'
			} else {
				$scope.found = true
				$scope.avatar = response[0].owner.avatar_url
				$scope.reposReceived = response
			}
		})
		gitFactory.getInfoUser($scope.username)
		.then(function(response) {
			$scope.name = response.name
			$scope.repos = response.public_repos
			$scope.followers = response.followers
		})
		$scope.username = ''
	}

	$scope.repoLanguage = function (repo) {
		if (repo.language) {
			return repo.language
		} else {
			return 'Markdown'
		}
	}


})
