'use strict';

/* Filters */

angular.module('eidolon.filters', [])
	.filter('isActive', ['active', function() {
		return function(active) {
			if (active) {
				return 'Yes';
			} else {
				return 'No';
			}
		}
	}]);