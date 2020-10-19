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

function validateDNIHasNumbers(dni) {
	const numbers = dni.slice(0, 8);

	if (isNaN(numbers)) {
		return false;
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

// 2. Dividir el numeros del DNI entre 23 y sabiendo su resto comprobar por la tabla que es la letra correcta


function checkDNILetter(dni, num) {
	const numbersDNI = dni.slice(0, 8);

	const rest = numbersDNI % num;

	const lastChar = dni.slice(8);

	const codigoLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';

	return codigoLetters[rest] === lastChar;
}

const resultCheckLetter = checkDNILetter('45706768H', 23);
// console.log(resultCheckLetter);


function isDNIValidator(dni, num) {
	const hasNumber = validateDNIHasNumbers(dni);
	const hasLetter = checkLastPositionIsLetter(dni);
	const isRightlength = longDNI(dni);
	const isRightLetter = checkDNILetter(dni, num);

	return hasNumber && hasLetter && isRightlength && isRightLetter;
}

const finalResult = isDNIValidator('45706768H', 23);
console.log(finalResult);
