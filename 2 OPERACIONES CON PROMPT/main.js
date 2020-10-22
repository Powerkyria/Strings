'use strict';

// 2.Haz un prompt donde aparezca las siguientes opciones. 1.Sumar,2.Restar,3.Multiplicar,4.Dividir,5.Salir . Una vez elegida saldrá otro prompt donde el usuario ingresará dos numero separandolos por "-" ejemplo: "2-8" o "10-45". Un vez hecho ejecutar la accion apropiada tras lo cual deberas mostrar el resultado en un alert con el siguiente formato "El resultado de multiplicar 2 por 8 es 16" o "el resultado de restar 2 mas 8 es 10" asi por cada operación. Tras cerrar el modal. Se volverá al menú inicial para que el usuario escoja una opcion. Y en caso de selecionar la opcion 5 salir el programa se cerrará.

const message = "1.Sumar 2.Restar 3.Multiplicar 4.Dividir 5.Salir";

let response = prompt(message);

const number = 'Ingrese un número';
const number2 = 'Ingrese otro número';
let x, y;

while(response.toLocaleLowerCase != 'salir'){

    if (response === 1 || response === 'Sumar') {
        add();
    } else if (response === 2) {
        subtract(prompt(number), prompt(number2));
    } else if (response === 3 || response === 'Multiplicar') {
        multiply(prompt(number), prompt(number2));
    } else if (response === 4 || response === 'Dividir') {
        divide(prompt(number), prompt(number2));
    }
}

function add() {

    x = prompt(number);
    y = prompt(number2)
	let resultA = Number(x) + Number(y);
	alert(`El resultado de sumar ${x} mas ${y} es ${resultA}`);
}

add();

function subtract(x, y) {
	let resultS = Number(x) - Number(y);
	alert(`El resultado de restar ${x} menos ${y} es ${resultS}`);
}

subtract(prompt(number), prompt(number2));

function multiply(x, y) {
	let resultM = Number(x) * Number(y);
	alert(`El resultado de multiplicar ${x} por ${y} es ${resultM}`);
}

// multiply(prompt(number), prompt(number2));

function divide(x, y) {
	let resultD = Number(x) / Number(y);
	alert(`El resultado de dividir ${x} entre ${y} es ${resultD}`);
}

// divide(prompt(number), prompt(number2));
