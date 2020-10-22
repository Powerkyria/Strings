'use strict';

const { Console } = require('console');

/*  La contraseña será valida si tiene al menos 6 caracteres,
 contiene al menos una letra mayúscula, 
 contiene al menos una letra minúscula, 
 tiene una barra baja "_" 
 y tiene al menos 1 numero
 Si alguna de esas condiciones no se cumple la contraseña no será valida.
*/

// SIN EXPRESIONES REGULARES:

function hasRightDNISize(password) {
	return password.length >= 6;
}

const result = hasRightDNISize('Hawai_5');

function hasPasswordLowerLetter(password) {
	const lowerLetters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

	for (let i = 0; i < lowerLetters.length; i++) {
		if (password.includes(lowerLetters[i])) {
			return true;
		}
	}
	return false;
}
const result2 = hasPasswordLowerLetter('Hawai_5');

function hasPasswordLowerLetter2(password) {
	const lowerLetters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

	let i = 0;
	let hasLowerLetter = false;

	while (i < lowerLetters.length && !hasLowerLetter) {
		hasLowerLetter = password.includes(lowerLetters[i]);
		i++;
	}

	return hasLowerLetter;
}

const newResult2 = hasPasswordLowerLetter2('Hawai_5');
// console.log(newResult2);

function hasPasswordUpperLetter(password) {
	const upperLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

	for (let i = 0; i < upperLetters.length; i++) {
		if (password.includes(upperLetters[i])) {
			return true;
		}
	}
	return false;
}

const result3 = hasPasswordUpperLetter('Hawai_5');

//TRANSFORMAR EL FOR EN WHILE: ---------------> HECHO!

function hasPasswordUpperLetter2(password) {
	const upperLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	let i = 0;
	let hasUpperLetter = false;

	while (i < upperLetters.length && !hasUpperLetter) {
		hasUpperLetter = password.includes(upperLetters[i]);
		i++;
	}

	return hasUpperLetter;
}
const newResult3 = hasPasswordUpperLetter2('Hawai_5');
// console.log(newResult3);

function hasPasswordLowBar(password) {
	return password.includes('_');
}
const result4 = hasPasswordLowBar('Hawai_5');

function hasPasswordOneNumber(password) {
	const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

	for (let i = 0; i < numbers.length; i++) {
		if (password.includes(numbers[i])) {
			return true;
		}
	}
	return false;
}
const result5 = hasPasswordOneNumber('Hawai_5');

//CON WHILE: ----------------------> HECHO!

function hasPasswordOneNumber2(password) {
	const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

	let i = 0;
	let hasOneNumber = false;
	while (i < numbers.length && !hasOneNumber) {
		hasOneNumber = password.includes(numbers[i]);
		i++;
	}
	return hasOneNumber;
}
const newResult5 = hasPasswordOneNumber2('Hawai_5');
// console.log(newResult5);

// CON isNaN: ------------> HECHO!

// NOTA:

// isNaN si es un numero devuelve false
// isNaN si no es un numero devuelve true

function hasPasswordOneNumber3(password) {
	let passwordChar;
	for (let i = 0; i < password.length; i++) {
		passwordChar = password[i];

		if (!isNaN(passwordChar)) {
			return true;
		}
	}
	return false;
}

const newResult5two = hasPasswordOneNumber3('Hawai_5');
// console.log(newResult5two);

// QUITAR VARIABLES Y RETORNAR LAS FUNCIONES DIRECTAMENTE: ------------> HECHOU!

function isValidatePassword(password) {
	return (
		hasRightDNISize(password) &&
		hasPasswordLowerLetter(password) &&
		hasPasswordUpperLetter(password) &&
		hasPasswordLowBar(password) &&
		hasPasswordOneNumber(password)
	);
}

const finalResult = isValidatePassword('Hawai_5');
// console.log(finalResult);

// RECORRER ARRAY CON UN WHILE

function potatxio() {
	const arrayOfWord = [ 'amarillo', 'verde', 'potatxio' ];

	// for ( let i = 0; i < arrayOfWord.length; i++){

	// 	console.log(arrayOfWord[i]);

	// }

	let i = 0;
	while (i < arrayOfWord.length) {
		console.log(arrayOfWord[i]);
		i++;
	}
}

// potatxio();

// RECORRER ARRAY CON UN WHILE DE NUEVO Y SIN MIRAR------> HECHO!

function potatxio2() {
	const arrayOfWord = [ 'amarillo', 'verde', 'potatxio' ];

	let i = 0;
	while (i < arrayOfWord.length) {
		console.log(arrayOfWord[i]);
		i++;
	}
}

// potatxio2();

// ENCONTRAR EL MILLON

function oneMillionBaby() {
	const amountMoney = [ 30, 50, 200, 1000000 ];
	return amountMoney.includes(1000000);
}

const result50 = oneMillionBaby();
// console.log(result50);

// ENCONTRAR EL MILLON CON WHILE

function oneMillionBaby2() {
	const amountMoney = [ 30, 50, 200, 1000000 ];

	// for(let i = 0; i < amountMoney.length; i++){

	// 	if(amountMoney[i]===1000000){
	// 		return true;
	// 	}
	// }
	// return false;

	//TERMINAR-----> HECHO!

	let i = 0;
	while (i < amountMoney.length) {
		if (amountMoney[i] === 1000000) {
			return true;
		}
		i++;
	}
	return false;
}
const result51 = oneMillionBaby2();
// console.log(result51);

// ENCONTRAR EL MILLON CON WHILE Y UN BOLEANO-----> HECHO!
// guardar el resultado en una variable, dejar de ejecutar el bucle y enviar la respuesta.

function oneMillionDollarsBaby() {
	const amountMoney = [ 30, 50, 200, 1000000 ];
	let i = 0;
	let boleano = false;

	while (i < amountMoney.length && !boleano) {
		boleano = amountMoney[i] === 1000000;
		i++;
	}
	return boleano;
}

const result52 = oneMillionDollarsBaby();
console.log(result52);

// CON EXPRESIONES REGULARES (version larga):

// function longPassword(password) {

// 	return password.length >= 6;
// }

// const result = longPassword("Hawai_5");
// // console.log(result);

// function passwordHasUpperLetter(password) {

// 	return /[A-Z]/.test(password);
// }

// const result2 = passwordHasUpperLetter("Hawai_5");
// // console.log(result2);

// function passwordHasLowerLetter(password) {

// 	return /[a-z]/.test(password);
// }

// const result3 = passwordHasLowerLetter("Hawai_5");
// // console.log(result3);

// function passwordHasLowBar(password) {

// 	return /[_]/.test(password);
// }

// const result4 = passwordHasLowBar("Hawai_5");
// // console.log(result4);

// function passwordHasOneNumeber(password) {

// 	return /[0-9]/.test(password);
// }

// const result5 = passwordHasOneNumeber("Hawai_5");
// // console.log(result5);

// function isValidePassword(password){
// 	const hasRightLong = longPassword(password);
// 	const hasUpperLetter = passwordHasUpperLetter(password);
// 	const hasLowerLetter = passwordHasLowerLetter(password);
// 	const hasLowBar = passwordHasLowBar(password);
// 	const hasNumber = passwordHasOneNumeber(password);

// 	return hasRightLong && hasUpperLetter && hasLowerLetter && hasLowBar && hasNumber;
// }

// const finalResult = isValidePassword("Hawai_5");
// console.log(finalResult);

// CON EXPRESIONES REGULARES (version corta): NO FUNCIONA AUN

// const regEx = /^([a-z][A-Z][_][0-9]){6,}$/;

// function isAValidatePassword(password){
// 	if (regEx.test(password) === true) {
// 		return 'La contraseña es valida';
// 	} else {
// 		return 'La contraseña no es valida';
// 	}
// }

// const resultRegEx = isAValidatePassword('Hawai_5');
// console.log(resultRegEx);
