'use strict';

// FORMA DE EXPORTAR ARCHIVO CON NODE

module.exports = function Circle(radius) {
    let exponent = 2;
    return {
        radius: radius,
        calculateArea: calculateArea,
    };
    function calculateArea() {
        return 3.14 * radius ** exponent;
    }
}
