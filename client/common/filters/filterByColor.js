'use strict';

module.exports = function () {
    return function (items, color) {
        let filteredArray = [];
        items.forEach((currentItem) => {
            let colour = currentItem.colour.title.toLowerCase();
            if (color.indexOf(colour) !== -1) {
                filteredArray.push(currentItem);
            }
        });
        return filteredArray;
    };

};
