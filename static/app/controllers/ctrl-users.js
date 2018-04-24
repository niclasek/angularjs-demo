app.controller('UsersController', function UsersController($rootScope, $scope, $interval, UserService) {
	$scope.title = 0;

	$scope.users = [
		{
			name: 'Steven Spielberg',
			snippet: 'Jaws as a jaw'
		}, {
			name: 'Lars von Trier',
			snippet: 'A genius'
		}, {
			name: 'Stanley Kubrick',
			snippet: 'peace'
		}
	];

	$scope.init = function () {
		UserService.get(5).then(function (data) {
			$scope.title = $rootScope.aMethod(data);
		});
	};

	$interval(function() {
		$scope.title++;
		//$scope.$apply();
	}, 1000);
});