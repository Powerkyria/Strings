'use strict';

/* Validar si el dni es correcto

 1. Comprueba que tenga 8 numero, una letra y una longitud de 9

2. Coge el numeros del DNI y lo divides entre 23 y compruebas por la tabla que es la letra correcta

Is Not a Number

isNaN si es un numero devuelve false
isNaN si no es un numero devuelve true

*/

function validateDNIHasNumbers(dni) {
	const calculateEightPositions = dni.length - 1;

	for (let i = 0; i < calculateEightPositions; i++) {
		const numbers = dni[i];

		if (isNaN(numbers)) {
			return false;
		}
	}
	return true;
}

const result = validateDNIHasNumbers('45706768H');
console.log(result);




