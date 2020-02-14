'use strict';

/**
 * @ngdoc module
 * @name build.common.services
 */

// @ngInject
module.exports = angular.module('build.common.services', [])
    .factory('productFactory4', require('./products.Factory'))
    .factory('productFactory', require('./productfactoryHttp'))
    .factory('userService', require('./users'));
