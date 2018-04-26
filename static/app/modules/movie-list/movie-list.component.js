'use strict';

angular.
module('movieList').
component('movieList', {
	templateUrl:'app/modules/movie-list/movie-list.template.html',
	controller: function MovieListController($http, Movie) {
		this.orderProp = "length";

		//Using our custom service to get the data
		this.movies = Movie.query();

		//Using AngularJS built-in service $http to get data
		var self = this;
		$http.get("app/movies/movies.json").then(function (response) {
		 	self.movies2 = response.data;
		});
	}
});