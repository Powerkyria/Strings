'use strict';

// Dado un string decir cuantas palabras hay

function wordsCounter(text){

    if(text === ''){
        return 0;
    }else if( text !== ''){
        return 1;
    }else if(text ){
        return spaceCount(text)+1;
        
    }
}

function spaceCount(text){
    let acc=0;

    for(let i=0; i<= text.length; i++){
        if(text.charAt(i) === ' '){
        acc = acc+1;
        }
    }
    return acc;
}

const counter= spaceCount('ordenador de segunda mano viejo y problematico');
console.log(counter);


const case1= wordsCounter('');
// console.log(case1);
const case2= wordsCounter('Templo');
// console.log(case2);
const case3= wordsCounter('ordenador de segunda mano');
// console.log(case3);

