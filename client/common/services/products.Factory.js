'use strict';

// @ngInject
module.exports = function ($resource) {
    /* $resource allows us to use Active Record like pattern of communication with our RESTful service.
        It will definitely save you a lot of lines of code, if your back-end provides proper API.
        It gives youfeatures like caching, interceptors, specifying response type and timeout*/
    return $resource('//api.myjson.com/bins', {},  {
        getProductData: {
            url: '//api.myjson.com/bins/zuv8u',
            cache: true,
            method: "GET"
        },
        getFilterData: {
            url: '//api.myjson.com/bins/178h6i',
            cache: true,
            method: "GET"
        }

    });

};
