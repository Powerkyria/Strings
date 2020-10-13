'use strict';

// 1. CREAR UNA FUNCION QUE ACEPTE UNA STRING POR PARAMETRO Y PONGA LA PRIMERA LETRA EN MAYUSCULA SI ES UNA SOLA PALABRA Y LA PRIMERA LETRA DE CADA PALABRA SI SON VARIAS

// Acceder a la primera letra despues del espacio
// Escribir primera palabra solo hasta el primer espacio.


// FUNCION PRIMERA LETRA A MAYUSCULA

function firstChar(sentence) {
	const capitalize = sentence.charAt(0).toUpperCase() + sentence.slice(1);
	return capitalize;
}

const mySentence = firstChar('esto es una crazy party full de mango');

// 1.1 MANERA LARRRRRGA SPAGUETI

// function findSpaces(sentence) {
// 	const upper = sentence.indexOf(' ') + 1;

// 	const paintLetter = sentence.charAt(upper).toUpperCase();

// 	const join =
// 		sentence.slice(0, upper) + paintLetter + sentence.slice(upper + 1);

// 	// console.log(join)

// 	const upper2 = sentence.indexOf(' ', upper) + 1;

// 	const paintSecondLetter = sentence.charAt(upper2).toUpperCase();

// 	const join2 =
// 		join.slice(0, upper2) + paintSecondLetter + sentence.slice(upper2 + 1);

// 	// console.log(join2);

// 	const upper3 = sentence.indexOf(' ', upper2) + 1;

// 	const paintThirdLetter = sentence.charAt(upper3).toUpperCase();
// 	const join3 =
// 		join.slice(0, upper3) + paintThirdLetter + sentence.slice(upper3 + 1);

// 	// console.log(join3);
// }

// findSpaces(mySentence);

// 1.2 COVERTIR PRIMER CARACTER DE UN STRIG DE VARIAS PALABRAS A MAYUSCULA SOLUCION BUSCADA

//  function capitalizeWords(sentence) {
// 	const writeSentence = sentence
// 		.split(' ')
// 		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// 		.join(' ');
// 	console.log(writeSentence);
// }

// capitalizeWords(mySentence);

// 1.3 COVERTIR PRIMER CARACTER DE UN STRING DE VARIAS PALABRAS A MAYUSCULA MY SOLUTION

function capitalizeFirstLetters(sentence) {
	for (let i = 0; i <= sentence.length; i++) {
		if (sentence[i] === ' ') {
			const lettersPosition = i + 1;
			const upperLetters = sentence.charAt(lettersPosition).toUpperCase();
			sentence =
				sentence.slice(0, lettersPosition) +
				upperLetters +
				sentence.slice(lettersPosition + 1);
		}
	}
	return sentence;
}
const result = capitalizeFirstLetters(mySentence);
console.log(result);

// 1.4 COVERTIR PRIMER CARACTER DE UN STRING DE VARIAS PALABRAS A MAYUSCULA JG

// function giveMeMySentenceBitch1(sentence) {
// 	let newSentence = sentence;
// 	for(let i = 0; i < sentence.length;i++){
// 	if(sentence[i] === " "){
// 	const charaterPositionToUpdate = i+1;
// 	const newChar = sentence
// 	.charAt(charaterPositionToUpdate)
// 	.toUpperCase();
// 	newSentence = newSentence.slice(0,charaterPositionToUpdate) + newChar + sentence.slice(charaterPositionToUpdate+1);
// 	}
// 	}
// 	return newSentence;
// 	}

// 	const firstFunction= giveMeMySentenceBitch1(mySentence)
// 	console.log(firstFunction)

// -----------------------------------------------------------

// 	function giveMeMySentenceBitch2(sentence) {
// 	for(let i = 0; i < sentence.length;i++){
// 	if(sentence[i] === " "){
// 	const charaterPositionToUpdate = i+1;
// 	const newChar = sentence
// 	.charAt(charaterPositionToUpdate)
// 	.toUpperCase();
// 	sentence = sentence.slice(0,charaterPositionToUpdate) + newChar + sentence.slice(charaterPositionToUpdate+1);
// 	}
// 	}
// 	return sentence;
// 	}

// 	const secondFunction = giveMeMySentenceBitch2(mySentence)
// 	console.log(secondFunction)

//  SEPARAR STRING LETRA X LETRA

// function separateWords(sentence) {
// 	const writeSentence = sentence.split('').join(' ');
//  console.log(writeSentence);
// }

// separateWords(mySentence);
