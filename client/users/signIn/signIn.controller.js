'use strict';

// @ngInject
module.exports = function ($scope, $http, $state, userService) {
    $scope.name = '';
    $scope.email = '';
    $scope.password = '';
    $scope.formData = {};


    // CREATE ==================================================================
    $scope.createUser = function (formData) {
        if (formData.$valid) {
            let name = formData.name.$modelValue;
            let email = formData.email.$modelValue;
            let password = formData.password.$modelValue;
            return userService.create({
                name,
                email,
                password
            }).then(() => {
                $state.go('userList');
                console.log('User Successfully Saved !');
            }).catch(err => {
                console.log('SomeThing bad in creating User !', err)
            });
        }
    };

    $scope.getProducts = function () {
        $scope.required = true;
        $state.go('products'); // name of state or $state.go('/products', {}); - when using url
    };
};
