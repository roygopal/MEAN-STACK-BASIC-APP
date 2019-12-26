'use strict';

require('../common/index');

// @ngInject
angular.module('productInfo', ['ui.router', 'build.common'])
    .config(['$stateProvider', '$compileProvider', '$httpProvider', '$locationProvider', function ($stateProvider, $compileProvider, $httpProvider, $locationProvider) {
        // $compileProvider.debugInfoEnabled(false);
        // $httpProvider.useApplyAsync(true);
        // $locationProvider.html5Mode(true);
        // $httpProvider.defaults.xsrfCookieName = 'X-CSRF-Token';
        // $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-Token';
        // $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $stateProvider
            .state('/', {
                controller: 'mainController',
                templateUrl: 'controller/filter.html',
                url: ''
            });
    }])
    .controller('mainController', require('./controller/main.js'));
