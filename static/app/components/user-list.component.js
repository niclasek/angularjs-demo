'use strict';

// Register `userList` component, along with its associated controller and template
angular.
module('app').
component('userList', {
	template:
	'<ul>' +
	'<li ng-repeat="user in $ctrl.users">' +
	'<span>{{user.name}}</span>' +
	'<p>{{user.snippet}}</p>' +
	'</li>' +
	'</ul>',
	controller: function PhoneListController() {
		this.users = [
			{
				name: 'Bob Dylan',
				snippet: 'Sing sing sing'
			}, {
				name: 'Bob Dylan 2',
				snippet: 'Sing sing sing'
			}, {
				name: 'Bob Dylan 3',
				snippet: 'Sing sing sing'
			}
		];
	}
});