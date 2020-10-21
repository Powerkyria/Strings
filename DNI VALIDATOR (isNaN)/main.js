'use strict';

/* Validar si el dni es correcto

 1. Comprueba que tenga 8 numero, 
    que el ultimo digito tenga una letra y 
    una longitud de 9

2. Dividir el numeros del DNI entre 23 y sabiendo su resto comprobar por la tabla que es la letra correcta

NOTA:

isNaN = Is Not a Number:

isNaN si es un numero devuelve false
isNaN si no es un numero devuelve true

*/

// 1

function hasNumbers(dni) {
	const numbers = dni.slice(0, 8);

	if (isNaN(numbers)) {
		return false;
	}

	return true;
}

const result = hasNumbers('45706768H');
// console.log(result);

function isLetterTheLastPosition(dni) {
	const lastChar = dni.charAt(dni.length - 1);
	return /[a-z]/i.test(lastChar);
}

const result2 = isLetterTheLastPosition('45706768H');
// console.log(result2);

function hasRightDNISize(dni) {
	return dni.length === 9;
}

const result3 = hasRightDNISize('45706768H');
// console.log(result3);

// 2. Dividir el numeros del DNI entre 23 y sabiendo su resto comprobar por la tabla que es la letra correcta

function isRightDNILetter(dni) {
	const combinationNumber = 23;

	const numbersDNI = dni.slice(0, 8);

	const rest = numbersDNI % combinationNumber;

	const lastChar = dni.slice(8);

	const codigoLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';

	return codigoLetters[rest] === lastChar;
}

const resultCheckLetter = isRightDNILetter('45706768H');
// console.log(resultCheckLetter);

function isDNIValidator(dni) {
	return hasNumbers(dni) &&
		isLetterTheLastPosition(dni) &&
		hasRightDNISize(dni) &&
		isRightDNILetter(dni);
}

const finalResult = isDNIValidator('45706768H');
console.log(finalResult);
