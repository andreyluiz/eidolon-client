'use strict';

/* Controllers */

angular.module('eidolon.controllers', [])
    .controller('ListUsersCtrl', ['$scope', 'Users', function($scope, Users) {
        $('#carregando').modal();
        Users.query(function(response) {
            $scope.users = response;
            $('#carregando').modal('hide');
        });
    }])
    .controller('NewUserCtrl', ['$scope', 'Users', '$location', function($scope, Users, $location) {
        $scope.user = new Users();

        $scope.submit = function() {
            $('#carregando').modal();
            if ($scope.user) {
                $scope.user.$save(function() {
                    $('#carregando').modal('hide');
                    $location.path('/users/' + $scope.user.userid + '/show');
                });
            }
        };
    }])
    .controller('ShowUserCtrl', ['$scope', 'Users', '$routeParams', function($scope, Users, $routeParams) {
        $('#carregando').modal();
        $scope.user = Users.get({ userid: $routeParams.userid }, function() {
            $('#carregando').modal('hide');
        });
    }])
    .controller('EditUserCtrl', ['$scope', 'Users', '$routeParams', '$location', function($scope, Users, $routeParams, $location) {
        $('#carregando').modal();
        $scope.user = Users.get({ userid: $routeParams.userid }, function() {
            $('#carregando').modal('hide');
        });

        $scope.submit = function() {
            $('#carregando').modal();
            if ($scope.user) {
                $scope.user.$update(function() {
                    $('#carregando').modal('hide');
                    $location.path('/users/' + $scope.user.userid + '/show');
                });
            }
        };
    }])
    .controller('DeleteUserCtrl', ['$scope', 'Users', '$routeParams', '$location', function($scope, Users, $routeParams, $location) {
        $('#carregando').modal();
        $scope.user = Users.get({ userid: $routeParams.userid }, function() {
            $scope.user.$delete(function() {
                $('#carregando').modal('hide');
                $location.path('/users');
            });
        });
    }])
    .controller('LoginCtrl', ['$scope', function($scope) {
        $scope.submit = function() {
            
        };
    }])
    .controller('RegisterCtrl', ['$scope', 'Users', '$location', function($scope, Users) {
        $scope.user = new Users();
        
        $scope.submit = function() {
            $('#carregando').modal();
            if ($scope.user) {
                $scope.user.$save(function() {
                    $('#carregando').modal('hide');
                    $location.path('/login');
                });
            }
        };
    }])
    .controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
    }]);