'use strict';

// Register `userList` component, along with its associated controller and template
angular.
module('app').
component('userList', {
	templateUrl:'app/templates/fragments/user-list.template.html',
	controller: function UserListController() {
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