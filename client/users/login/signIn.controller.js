'use strict';

// @ngInject
module.exports = function ($scope, $http, $state, userService) {
    $scope.name = '';
    $scope.email = '';
    $scope.password = '';
    $scope.formData = {};
    $scope.loading = true;
    $scope.required = false;
    //$scope.userData = {};

    // GET =====================================================================
    $scope.getUser = function () {
        return userService.get()
            .then(response => {
                $scope.userData = response.data;
            }).catch(err => {
                console.log('SomeThing bad in creating User !', err)
        });
    };

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
                alert('User Successfully Saved !');
            }).catch(err => {
                console.log('SomeThing bad in creating User !', err)
            });
        }
    };

    // DELETE ==================================================================
    $scope.delete = function (email) {
        return userService.delete(
            email
        ).then(() => {
            $scope.getUser();
            console.log('User Deleted Successfully !');
        }).catch(err => {
            console.log('SomeThing bad in deleting User !', err)
        });
    };

    $scope.getProducts = function () {
        $scope.required = true;
        $state.go('products'); // name of state or $state.go('/products', {}); - when using url
    }
    $scope.isRequired = function () {
        return $scope.required;
    }
};
