'use strict'

var app = angular.module('app', [
	// ...which depends on the module
	'artistList',
	'movieList',
	'core.movie',
	'ActorsInfoDirective'
]);

