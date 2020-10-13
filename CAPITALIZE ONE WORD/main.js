'use strict';

// COVERTIR LA PRIMERA LETRA A MAYUSCULA

function upperCaseToFirstChar(word) {
	const capitalize = word.charAt(0).toUpperCase() + word.slice(1);
	return capitalize;
}

const newWord = upperCaseToFirstChar('maravilloso');
console.log(newWord);
