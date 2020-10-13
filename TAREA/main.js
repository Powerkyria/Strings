'use strict';

// 1. Crea una funcion que acepte una string por parametro y ponga a la primera letra
// en mayuscula si es una sola palabra y que ponga a la primera letra de cada palabra en mayuscula

// Acceder a la primera letra despues del espacio
// Escribir primera palabra solo hasta el primer espacio.

// function firstChar(sentence) {
// 	const capitalize = sentence.charAt(0).toUpperCase() + sentence.slice(1);
// 	return capitalize;
// }

// const mySentence = firstChar('esto es una crazy party full de mango');

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

// function capitalizeFirstLetters(sentence) {
// 	for (let i = 0; i <= sentence.length; i++) {
// 		if (sentence[i] === ' ') {
// 			const lettersPosition = i + 1;
// 			const upperLetters = sentence.charAt(lettersPosition).toUpperCase();
// 			sentence =
// 				sentence.slice(0, lettersPosition) +
// 				upperLetters +
// 				sentence.slice(lettersPosition + 1);
// 		}
// 	}
// 	return sentence;
// }
// const result = capitalizeFirstLetters(mySentence);
// console.log(result);

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

// 2. CREA UNA FUNCION QUE ACEPTE UNA STRING POR PARAMETRO Y QUE DIGA SI ESA STRING ES UN PALINDROMO

// function palindromo(word) {
// 	const upperWord = word.toUpperCase();
// 	const reverseWord = upperWord.split('').reverse().join('');

// console.log(reverseWord);

// 	if (reverseWord === upperWord) {
// 		return 'Es un Palindromo';
// 	} else {
// 		return 'No es un palindromo';
// 	}
// }

// const myPalindromo = palindromo('Ana');
// console.log(myPalindromo);

// 2.2 CREA UNA FUNCION QUE ACEPTE UNA STRING POR PARAMETRO Y QUE DIGA SI ESA STRING ES UN PALINDROMO SIN SPLIT NI REVERSE

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

// 3. Dado un array con números quiero una función que me devuelva un array que me diga si son pares o impares. Es decir, sin en la posición del 0 de array hay un 1 en la posición 0 del array que devuelve debe haber un impar Un ejemplo. La función recibe [0, 2, 4, -6, 7] y devuelve [par,  par, par, par,  impar]

// const numbersArray = [ 0, 2, 4, -6, 7, 9 ];
// let newArray = [];
// function evenOdd(numbers) {
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers[i] % 2 === 0) {
// 			newArray.push('par');
// 		} else {
// 			newArray.push('impar');
// 		}
// 	}
// 	return newArray;
// }

// const result = evenOdd(numbersArray);
// console.log(result);

// 4 Dado un array de números y quiero una función que me retorne la media formada por los números de dicho array.

const numbers = [ 2, 4, 6 ];
let acc = 0;

function average(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		acc += numbers[i] / numbers.length;
	}
	return acc;
}
const result = average(numbers);
console.log(result);
