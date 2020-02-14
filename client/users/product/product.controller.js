'use strict';

// @ngInject
module.exports = function MainController ($scope, $filter, productFactory) {
    $scope.productData = [];
    $scope.searchTerm = '';
    $scope.filterData = [];
    $scope.brandValues = [];
    $scope.colorValues = [];
    $scope.priceValues = [];
    $scope.fixedPrice = [];
    $scope.sortProduct = 'Relevance';
    $scope.searchCount = 0;
    $scope.minValue = 'Min';
    $scope.selectedColor = [];
    $scope.maxValue = Number.MAX_SAFE_INTEGER;
    $scope.getProduct = getProduct;
    $scope.getFilter = getFilter;
    $scope.getFilterProduct = getFilterProduct;
    $scope.sortProductByPrice = sortProductByPrice;
    const init = function () {
        getFilter();
        getProduct();
    };
    init();

    // GET =====================================================================
    function getFilterProduct(filterObject) {
        getProduct()
            .then(data => {
                $scope.productData = data;
                if (filterObject && filterObject.colorValue) {
                    var index = $scope.selectedColor.indexOf(filterObject.colorValue);
                    if (index > -1) $scope.selectedColor.splice(index, 1);
                    else $scope.selectedColor.push(filterObject.colorValue);
                }
                if ($scope.searchTerm && $scope.searchTerm.length >= 2) {
                    $scope.productData = $filter('filterByBrand')($scope.productData, $scope.searchTerm);
                }
                if ($scope.minValue || $scope.maxValue) {
                    $scope.productData = $filter('filterByPrice')($scope.productData, $scope.minValue, $scope.maxValue);
                }
                if ($scope.selectedColor.length) {
                    $scope.productData = $filter('filterByColor')($scope.productData, $scope.selectedColor);
                }
                if ($scope.sortProduct) {
                    sortProductByPrice($scope.sortProduct);
                }
                $scope.searchCount = $scope.productData.length;

            }).catch(err => {
            console.log('SomeThing bad in getting product Info !', err);
            throw err;
        });
    }

    function sortProductByPrice(value) {
        if (value.indexOf('Desc') !== -1)
            $scope.productData = $filter('orderBy')($scope.productData, "price".toLowerCase(), false);
        else if (value.indexOf('Relevance') !== -1)
            $scope.productData = $filter('orderBy')($scope.productData, "brand".toLowerCase());
        else if (value.indexOf('Aesc') !== -1)
            $scope.productData = $filter('orderBy')($scope.productData, "price".toLowerCase(), true);
        else if (value === 'Discount' || value === 'Rating')
            $scope.productData = $filter('orderBy')($scope.productData, value.toLowerCase(), false);
    }

    function getProduct() {
        return productFactory.getProductData()
            .then(response => {
                response = response.data;
                $scope.productData = response.products;
                return $scope.productData;
            }).catch(err => {
                console.log('SomeThing bad in getting product Info !', err);
                throw err;
            });
    }

    function getFilter() {
        return productFactory.getFilterData()
            .then(response => {
                response = response.data;
                $scope.filterData = response.filters;
                for (let types of response.filters) {
                    if (types.type === 'BRAND') {
                        $scope.brandValues = types.values;
                    }
                    if (types.type === 'COLOUR') {
                        $scope.colorValues = types.values;
                    }
                    if (types.type === 'PRICE') {
                        $scope.priceValues = types.values;
                    }
                }
            }).catch(err => {
            console.log('SomeThing bad in getting filterData !', err);
            throw err;
        });
    }
};
