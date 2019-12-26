'use strict';

require('./filters');
require('./services');
require('angular-resource');
/**
 * @ngdoc module
 * @name build.common.filters
 */
// @ngInject
module.exports = angular.module('build.common', ['ngResource', 'build.common.filters', 'build.common.services']);
