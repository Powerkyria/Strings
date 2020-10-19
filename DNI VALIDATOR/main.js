'use strict';

/* Validar si el dni es correcto

 1. Comprueba que tenga 8 numero, 
    que el ultimo digito tenga una letra y 
    una longitud de 9

2. Dividir el numeros del DNI entre 23 y sabiendo su resto comprobar por la tabla que es la letra correcta

Is Not a Number

isNaN si es un numero devuelve false
isNaN si no es un numero devuelve true

*/

// 1

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
// console.log(finalResult);

// 2. Dividir el numeros del DNI entre 23 y sabiendo su resto comprobar por la tabla que es la letra correcta

// quiero los 8 primeros numeros
// dividirlos entre 23 y saber su resto

// function checkDNILetter(dni, num) {
// 	const calculateEightPositions = dni.length - 1;

// 	let numbers = [];

// 	for (let i = 0; i < calculateEightPositions; i++) {
// 		numbers.push(dni[i]);
// 	}

// 	const numbersDNI = numbers.join('');

// 	const calculateRest = numbersDNI % num;
// 	return calculateRest;
// }

// const resultCheckLetter = checkDNILetter('45706768H', 23);
// console.log(resultCheckLetter);

// 2. Dividir el numeros del DNI entre 23 y sabiendo su resto comprobar por la tabla que es la letra correcta

// SIN CONVERTIR EL STRING EN ARRAY

function checkDNILetter(dni, num) {
	const calculateEightPositions = dni.length - 1;

	let numbersDNI = '';

	for (let i = 0; i < calculateEightPositions; i++) {
		const charNumber = dni[i];
		numbersDNI = numbersDNI + charNumber;
	}

	const rest = numbersDNI % num;

	const lastChar = dni.charAt(dni.length - 1);

	const codigoLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';

	return codigoLetters[rest] === lastChar;
}

const resultCheckLetter = checkDNILetter('45706768H', 23);
console.log(resultCheckLetter);
