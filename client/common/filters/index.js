'use strict';

/**
 * @ngdoc module
 * @name build.common.filters
 */

// @ngInject
module.exports = angular.module('build.common.filters', [])
    .filter('filterByBrand', require('./filterByBrand'))
    .filter('orderBy', require('./orderBy'))
    .filter('filterByColor', require('./filterByColor'))
    .filter('filterByPrice', require('./filterByPrice'));
