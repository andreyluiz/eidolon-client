'use strict';

/* Services */

angular.module('eidolon.services', ['ngResource'])
	.service('Users', ['$resource', function($resource) {
		return $resource('http://eidolon-server.mybluemix.net/users/:userid', { userid: '@userid'}, {
			update: {
				method: 'PUT'
			}
		});
	}])
	.value('active', '');