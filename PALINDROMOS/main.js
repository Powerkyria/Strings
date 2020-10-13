'use strict';

// 2. CREA UNA FUNCION QUE ACEPTE UNA STRING POR PARAMETRO Y QUE DIGA SI ESA STRING ES UN PALINDROMO

function palindromo(word) {
	const upperWord = word.toUpperCase();
	const reverseWord = upperWord.split('').reverse().join('');

console.log(reverseWord);

	if (reverseWord === upperWord) {
		return 'Es un Palindromo';
	} else {
		return 'No es un palindromo';
	}
}

const myPalindromo = palindromo('Ana');
console.log(myPalindromo);

// 2.2 CREA UNA FUNCION QUE ACEPTE UNA STRING POR PARAMETRO Y QUE DIGA SI ESA STRING ES UN PALINDROMO SIN SPLIT NI REVERSE

function newPalindromo(word) {
	const upperWord = word.toUpperCase();
	const arrayOfLetters = Array.from(upperWord);
	const arrayReverse = [];

	for (let i = 0; i < upperWord.length; i++) {
		const reverseWord = arrayOfLetters.pop();
		arrayReverse.push(reverseWord);
	}
	const joinArrayReverse = arrayReverse.join('');
	console.log(arrayReverse);
	console.log(joinArrayReverse);

	if (joinArrayReverse === upperWord) {
		return 'Es un Palindromo';
	} else {
		return 'No es un palindromo';
	}
}

const mySecondPalindromo = newPalindromo('Ana');
console.log(mySecondPalindromo);

