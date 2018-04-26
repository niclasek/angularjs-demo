angular.
module('app').
component('greetUser', {
	template: 'Hello, {{$ctrl.who}}!',
	controller: function GreetUserController() {
		this.who = 'world';
	}
});