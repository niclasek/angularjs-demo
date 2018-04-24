app.controller('UsersController', function UsersController($rootScope, $scope, $interval, UserService) {
	$scope.title = 0;

	$rootScope.title = "asdasd";

	$scope.phones = [
		{
			name: 'Nexus S',
			snippet: 'Fast just got faster with Nexus S.'
		}, {
			name: 'Motorola XOOM™ with Wi-Fi',
			snippet: 'The Next, Next Generation tablet.'
		}, {
			name: 'MOTOROLA XOOM™',
			snippet: 'The Next, Next Generation tablet.'
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