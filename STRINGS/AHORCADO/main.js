'use strict';

// FUNCIONES QUE SIRVEN PARA EL AHORCADO

// 1. CONTAR LETRAS

function countChart(p) {
	return p.length;
}

let number = countChart('visual');
console.log(number);

// 2. POSICION DE UNA LETRA DENTRO DE UNA PALABRA 

function word(word, letter) {
	return word.indexOf(letter);
}
let letterNumber = word('algo', 'y');
console.log(letterNumber);

// 3. CONTAR CUANTAS PALABRAS HAY

function wordCount(text) {
	if (text === '') {
		return 0;
	} else if (text.includes(' ')) {
		return countSpace(text) +1;
	} else if (text != '' && !text.includes(' ')) {
		return 1;
	}
}

const wordNumber = wordCount('Mi casa nueva amarilla');
console.log(wordNumber);

function countSpace(text) {
    let acc= 0;
	for(let i = 0; i <= text.length; i++) {
        if(text.charAt(i) === ' '){
            acc = acc + 1;
        }
    }
    return acc;
}

const spaceNumber = countSpace('Mi casa nueva');
console.log(spaceNumber);
