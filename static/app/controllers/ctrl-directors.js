app.controller('DirectorsController', function DirectorsController($rootScope, $scope, $interval, DirectorService) {
	$scope.title = 0;

	$scope.directors = [
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
		DirectorService.get(5).then(function (data) {
			$scope.title = $rootScope.aMethod(data);
		});
	};

	$interval(function() {
		$scope.title++;
		//$scope.$apply();
	}, 1000);
});