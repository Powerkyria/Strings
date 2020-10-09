'use strict';

// Convertir la primera letra a mayuscula

function upperCaseToFirstChar (word){
    const upper= word.charAt(0).toUpperCase();
    const lowWord= word.substring(1,word.lenght);
    return `${upper}${lowWord}`;
}

const newWord= upperCaseToFirstChar('maravilloso');
console.log(newWord);