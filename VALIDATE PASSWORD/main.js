'use strict';

/*  La contraseña será valida si tiene al menos 6 caracteres,
 contiene al menos una letra mayúscula, 
 contiene al menos una letra minúscula, 
 tiene una barra baja "_" 
 y tiene al menos 1 numero
 Si alguna de esas condiciones no se cumple la contraseña no será valida.
*/

// SIN EXPRESIONES REGULARES:


function longPassword(password) {
	return password.length >= 6;
}

const result = longPassword('Hawai_5');


function hasPasswordLowerLetter(password) {
	const lowerLetters = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	for (let i = 0; i < lowerLetters.length; i++) {
		if (password.includes(lowerLetters[i])) {
			return true;
		}
	}
	return false;
}
const result2 = hasPasswordLowerLetter('Hawai_5');


function hasPasswordUpperLetter(password) {
	const upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

	for (let i = 0; i < upperLetters.length; i++) {
		if (password.includes(upperLetters[i])) {
			return true;
		}
	}
	return false;
}
const result3 = hasPasswordUpperLetter('Hawai_5');


function hasPasswordLowBar(password) {
	return password.includes('_');
}
const result4 = hasPasswordLowBar('Hawai_5');


function hasPasswordOneNumber(password) {
	const numbers = [ 0, 1, 2, , 3, 4, 5, 6, 7, 8, 9 ];

	for (let i = 0; i < numbers.length; i++) {
		if (password.includes(numbers[i])) {
			return true;
		}
	}
	return false;
}
const result5 = hasPasswordOneNumber('Hawai_5');


function isValidatePassword(password) {
	const hasRigthLong = longPassword(password);
	const hasLowerLetter = hasPasswordLowerLetter(password);
	const hasUpperLetter = hasPasswordUpperLetter(password);
	const hasLowBar = hasPasswordLowBar(password);
	const hasNumber = hasPasswordOneNumber(password);

	return hasRigthLong && hasLowerLetter && hasUpperLetter && hasLowBar && hasNumber
	
}

const finalResult = isValidatePassword('Hawai_5');
console.log(finalResult);



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
