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
	} else if (text.includes(' ')) {
		return ' ' + 1;
	} else if (text != '' && !text.includes(' ')) {
		return 1;
	}
}

const wordNumber = one('Mi casa nueva');
// console.log(wordNumber);


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
