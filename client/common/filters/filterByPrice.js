'use strict';

/**
 * Filter the array based on project name, role name and role id
 * @return {array} filtered array of project entries
 */
module.exports = function () {
    return function (items, min, max) {
        let filteredArray = [];
        if (min === undefined || min === 'Min') min = Number.MIN_SAFE_INTEGER;
        if (max === undefined || max === 'Min' || max === 'Max') max = Number.MAX_SAFE_INTEGER;

        items.forEach((currentItem) => {
            if (currentItem.price.final_price >= min && currentItem.price.final_price <= max) {
                filteredArray.push(currentItem);
            }
        });
        return filteredArray;
    };
};
