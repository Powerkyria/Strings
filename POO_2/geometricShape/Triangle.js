'use strict';

// FORMA DE EXPORTAR ARCHIVO CON NODE

module.exports = function Triangle(side) {
    return {
        side: side,
        calculateArea: calculateArea,
    };
    function calculateArea() {
        return Math.sqrt(3) / 4 * Math.pow(side, 2);
    }
}