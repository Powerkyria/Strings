'use strict';

// 1. Crea una funcion que acepte una string por parametro y ponga a la primera letra
// en mayuscula SI ES UNA SOLA PALABRA y que ponga a la primera letra de cada palabra en mayuscula

// Acceder a la primera letra despues del espacio
// Escribir primera palabra solo hasta el primer espacio.

function firstChar(sentence) {
	const capitalize = sentence.charAt(0).toUpperCase() + sentence.slice(1);
	return capitalize;
}

const mySentence = firstChar('esto es un crazy party');



function findSpaces(sentence) {
	const upper = sentence.indexOf(' ') + 1;

	const paintLetter = sentence.charAt(upper).toUpperCase();

    const join = sentence.slice(0, upper) + paintLetter + sentence.slice(upper + 1);
    
    const upper2 = sentence.indexOf(' ', upper) + 1;
    
    const paintSecondLetter = sentence.charAt(upper2).toUpperCase();
    
    const join2 =  join.slice(0,upper2)  + paintSecondLetter + sentence.slice(upper2+1);

    console.log(join2);
    
    const upper3 = sentence.indexOf(' ', upper2) + 1;

    const paintThirdLetter = sentence.charAt(upper3).toUpperCase();
    const join3 = join.slice(0,upper3)  + paintThirdLetter + sentence.slice(upper3+1);

    console.log(join3)
}

findSpaces(mySentence);

// // 2. Crea una funcion que acepte una string por parametro  y que diga si es esa string es un palíndromo.

// function palindromo (word) {
//     const reverseWord = word.reverse();

// 	if ( reverseWord === word) {
// 		return 'Es un Palindromo';
// 	} else {
// 		return 'No es un palindromo';
//     }
// }

// const myPalindromo = palindromo('ana');
// console.log(myPalindromo);
