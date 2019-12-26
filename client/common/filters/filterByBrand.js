'use strict';

module.exports = function () {
    return function (items, searchText) {
        let filteredArray = [];
        let searchString = searchText.toLowerCase();

        items.forEach((currentItem) => {
            let brandName = currentItem.brand.toLowerCase();
            if (brandName.includes(searchString)) {
                filteredArray.push(currentItem);
            }
        });
        return filteredArray;
    };

};
