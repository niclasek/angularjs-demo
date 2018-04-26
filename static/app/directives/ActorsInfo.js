angular.module('ActorsInfoDirective', [])
	.controller('Controller', ['$scope', function($scope) {
		$scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
		$scope.igor = { name: 'Igor', address: '123 Somewhere' };
	}])
	.directive('myActor', function() {
		return {
			restrict: 'E',
			scope: {
				customerInfo: '=info'
			},
			templateUrl: 'app/templates/views/my-actor.html'
		};
	});