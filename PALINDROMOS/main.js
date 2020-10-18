'use strict';

// 2. CREA UNA FUNCION QUE ACEPTE UNA STRING POR PARAMETRO Y QUE DIGA SI ESA STRING ES UN PALINDROMO

function palindromo(word) {
	const upperWord = word.toUpperCase();
	const reverseWord = upperWord.split('').reverse().join('');

	if (reverseWord === upperWord) {
		return 'Es un Palindromo';
	} else {
		return 'No es un palindromo';
	}
}

const myPalindromo = palindromo('Ana');
console.log(myPalindromo);

// 2.2 SIN SPLIT NI REVERSE

// function newPalindromo(word) {
// 	const upperWord = word.toUpperCase();
// 	const arrayOfLetters = Array.from(upperWord);
// 	const arrayReverse = [];

// 	for (let i = 0; i < upperWord.length; i++) {
// 		const reverseWord = arrayOfLetters.pop();
// 		arrayReverse.push(reverseWord);
// 	}
// 	const joinArrayReverse = arrayReverse.join('');
// 	console.log(arrayReverse);
// 	console.log(joinArrayReverse);

// 	if (joinArrayReverse === upperWord) {
// 		return 'Es un Palindromo';
// 	} else {
// 		return 'No es un palindromo';
// 	}
// }

// const mySecondPalindromo = newPalindromo('Ana');
// console.log(mySecondPalindromo);

// SIN CONVERTIR EL STRING EN ARRAY JG

function isPalindromo2(word) {
	const upperWord = word.toUpperCase();
	let stringReverse = '';

	for (let i = upperWord.length; i > -1; i--) {
		const reverseWord = upperWord.charAt(i);
		stringReverse = stringReverse + reverseWord;
	}

	if (stringReverse === upperWord) {
		return 'Es un Palindromo';
	} else {
		return 'No es un palindromo';
	}
}

const mySecondPalindromo2 = isPalindromo2('Ana');
console.log(mySecondPalindromo2);
