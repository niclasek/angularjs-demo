app.service('UserService', function ($http) {
	this.get = function (count) {
		return new Promise(function (resolve, reject) {
			resolve("asdasd " + count);
		});
	};
});