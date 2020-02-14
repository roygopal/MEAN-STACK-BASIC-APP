'use strict';

// @ngInject
module.exports = function ($scope, $http, $state, userService) {
    $scope.getUser = getUser;
    $scope.deleteUser = deleteUser;
    const init = function () {
        getUser();
    };
    init();

    // GET =====================================================================
    function getUser() {
        return userService.get()
            .then(response => {
                $scope.userData = response.data;
            }).catch(err => {
                console.log('SomeThing bad in getting User !', err)
            });
    }

    // DELETE ==================================================================
    function deleteUser(email) {
        return userService.delete(
            email
        ).then(() => {
            $scope.getUser();
            console.log('User Deleted Successfully !');
        }).catch(err => {
            console.log('SomeThing bad in deleting User !', err)
        });
    }
};
