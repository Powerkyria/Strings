'use strict';

/* Validar si el dni es correcto

 1. Comprueba que tenga 8 numero, 
    que el ultimo digito tenga una letra y 
    una longitud de 9

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
// console.log(result);

function checkLastPositionIsLetter(dni) {
	const lastChar = dni.charAt(dni.length - 1);
	return /[a-z]/i.test(lastChar);
}

const result2 = checkLastPositionIsLetter('45706768H');
// console.log(result2);

function longDNI(dni) {
	return dni.length === 9;
}

const result3 = longDNI('45706768H');
// console.log(result3);

function isDNI(dni) {
	const hasNumber = validateDNIHasNumbers(dni);
	const hasLetter = checkLastPositionIsLetter(dni);
	const isRightlength = longDNI(dni);

	return hasNumber && hasLetter && isRightlength;
}

const finalResult = isDNI('45706768H');
console.log(finalResult);
