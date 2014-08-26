'use strict';

// Declare app level module which depends on filters, and services
angular.module('eidolon', [
    'ngRoute',
    'eidolon.filters',
    'eidolon.services',
    'eidolon.directives',
    'eidolon.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', 						{templateUrl: 'partials/home.html'});
    $routeProvider.when('/login', 					{templateUrl: 'partials/login.html', 		controller: 'LoginCtrl'});
    $routeProvider.when('/register', 				{templateUrl: 'partials/register.html', 	controller: 'RegisterCtrl'});

    $routeProvider.when('/users', 					{templateUrl: 'partials/users/list.html', 	controller: 'ListUsersCtrl'});
    $routeProvider.when('/users/new', 				{templateUrl: 'partials/users/new.html', 	controller: 'NewUserCtrl'});
    $routeProvider.when('/users/:userid/show', 		{templateUrl: 'partials/users/show.html', 	controller: 'ShowUserCtrl'});
    $routeProvider.when('/users/:userid/edit', 		{templateUrl: 'partials/users/edit.html', 	controller: 'EditUserCtrl'});
    $routeProvider.when('/users/:userid/delete', 	{templateUrl: 'partials/users/list.html',   controller: 'DeleteUserCtrl'});
    
    $routeProvider.otherwise({redirectTo: '/'});
}]);