'use strict';

module.exports = function () {
    return function (items, sortBy, ascending = true) {
        let filteredArray = items;
        if (sortBy === 'brand') {
            filteredArray.sort((val1, val2) => {
                return val1.brand.localeCompare(val2.brand);
            });
        }
        else if (sortBy === "price") {
            if (!ascending) {
                filteredArray.sort((val1, val2) => {
                    return val2[sortBy].final_price - val1[sortBy].final_price;
                });
            }
            else {
                filteredArray.sort((val1, val2) => {
                    return val1[sortBy].final_price - val2[sortBy].final_price;
                });
            }
        }
        else if (sortBy === "discount") {
            filteredArray.sort((val1, val2) => {
                return val2.discount - val1.discount;
            });
        }
        else if (sortBy === "rating") {
            filteredArray.sort((val1, val2) => {
                return val2.rating - val1.rating;
            });
        }
        return filteredArray;
    };

};
