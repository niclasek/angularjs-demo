angular.
module('core.movie').
factory('Movie', ['$resource',
	function($resource) {
		return $resource('app/movies/movies.json', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	}
]);