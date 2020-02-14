'use strict';

require('../common/index');
require('./login');
require('./product');

// @ngInject
angular.module('productInfo', ['ui.router', 'build.common', 'build.signIn', 'build.products'])
    .config(['$stateProvider', '$compileProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', function ($stateProvider, $compileProvider, $httpProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        $compileProvider.debugInfoEnabled(false);
        $httpProvider.useApplyAsync(true);
        // $locationProvider.html5Mode(true);
        $urlMatcherFactoryProvider.caseInsensitive(true);
        // $httpProvider.defaults.xsrfCookieName = 'X-CSRF-Token';
        // $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-Token';
        // $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('signIn', {
                    controller: 'userServiceCtrl',
                    templateUrl: 'login/signIn.html',
                    url: '/'
            })
            .state('products', {
                controller: 'productCtrl',
                templateUrl: 'product/product.html',
                url: '/products'
            });
    }]);
    /*.run(['$route', function($route) {
        $route.reload();
    }])*/
