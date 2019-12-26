'use strict';

// @ngInject
module.exports = function ($http) {
    return {
        getProductData: function () {
            //return $http.get('http://demo1853299.mockable.io/products' or //api.jsonbin.io/b/5af2e9e70fb4d74cdf23d910);
            // without image https://api.myjson.com/bins/18uds4
            // with image: //api.myjson.com/bins/zuv8u'
            return $http({
                url: '//api.myjson.com/bins/zuv8u',
                cache: true,
                method: "GET"
                // headers: {
                //     'Access-Control-Allow-Origin': '*',
                //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                // }
            });
        },
        getFilterData: function () {
            //return $http.get('http://demo1853299.mockable.io/filters');
            return $http({
                url: '//api.myjson.com/bins/178h6i',
                cache: true,
                method: "GET"
            });
        },

    }

};
