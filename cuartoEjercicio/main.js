'use strict';

// Convertir la primera letra a mayuscula

function upperCaseToFirstChar (word){
    const upper= word.charAt(0).toUpperCase();
    const lowWord= word.substring(1,8);
    return `${upper}${lowWord}`;
}

const newWord= upperCaseToFirstChar('caracter');
console.log(newWord);