'use strict';

// Register `userList` component, along with its associated controller and template
angular.
module('artistList').
component('artistList', {
	templateUrl:'app/modules/artist-list/artist-list.template.html',
	controller: function UserListController() {
		this.artists = [
			{
				name: 'Bob Dylan',
				snippet: 'Sing sing sing',
				age: 62
			}, {
				name: 'Amy Whinehouse',
				snippet: 'Sing sing sing',
				age: 27
			}, {
				name: 'Motta',
				snippet: 'Sing sing sing',
				age: 32
			}
		];
		this.orderProp = "age";
	}
});