'use strict';

// FORMA DE EXPORTAR ARCHIVO CON NODE

module.exports = function Rectangle(height, width) {
    return {
        height: height,
        width: width,
        calculateArea: calculateArea,
    };

    function calculateArea() {
        return height * width;
    }
}
