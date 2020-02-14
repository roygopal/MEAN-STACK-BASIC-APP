'use strict';

// @ngInject
module.exports = function ($http) {
    return {
        get : function() {
            return $http.get('/users');
        },
        create : function(userData) {
            return $http.post('/users', JSON.stringify(userData));
        },
        delete : function(email) {
            return $http.delete('/users/' + email);
        }
    };
};
