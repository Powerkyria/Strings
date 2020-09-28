'use strict';

// function countChart(p) {
// 	return p.length;
// }

// let number = countChart('visual');
// console.log(number);

// function word(word, letter) {
// 	return word.indexOf(letter);
// }
// let letterNumber = word('algo', 'y');
// console.log(letterNumber);

function one(text) {
	if (text === '') {
		return 0;
	} else {
		return 1;
	}
}

const wordNumber = one('Mi pc');
console.log(wordNumber);
