'use strict';

angular.
module('movieList').
component('movieList', {
	templateUrl:'app/modules/movie-list/movie-list.template.html',
	controller: function MovieListController($http) {
		var self = this;
		this.orderProp = "length";
		$http.get("app/movies/movies.json").then(function (response) {
			self.movies = response.data;
		});
	}
});