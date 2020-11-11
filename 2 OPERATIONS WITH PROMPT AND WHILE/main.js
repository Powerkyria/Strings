'use strict';

// 2.Haz un prompt donde aparezca las siguientes opciones. 1.Sumar,2.Restar,3.Multiplicar,4.Dividir,5.Salir . Una vez elegida saldrá otro prompt donde el usuario ingresará dos numero separandolos por "-" ejemplo: "2-8" o "10-45". Un vez hecho ejecutar la accion apropiada tras lo cual deberas mostrar el resultado en un alert con el siguiente formato "El resultado de multiplicar 2 por 8 es 16" o "el resultado de restar 2 mas 8 es 10" asi por cada operación. Tras cerrar el modal. Se volverá al menú inicial para que el usuario escoja una opcion. Y en caso de selecionar la opcion 5 salir el programa se cerrará.

// //PEDIR DOS NUMEROS SEPARADOS X UN GUION
// const askForNumbers = 'Ingrese dos números separados por un guión';
// let numbers = prompt(askForNumbers, ''+'-'+'');

// const indexOfX= numbers.indexOf('-') - 1;
// const indexOfY= numbers.indexOf('-') + 1;
// let x = numbers.charAt(indexOfX);
// let y = numbers.charAt(indexOfY);

function calculator() {
	const message = `Eliga una opción:

1.Sumar, 2.Restar, 3.Multiplicar, 4.Dividir, 5.Salir`;
	let response = prompt(message);
	const exitMessage = 'salir';

	while (response.toLowerCase() != exitMessage && response != 5) {
		const messageNumberOne = 'Ingrese un número';
		const messageNumberTwo = 'Ingrese otro número';
		let x = prompt(messageNumberOne);
		let y = prompt(messageNumberTwo);

		if (response.toLowerCase() === 'sumar' || response == 1) {
			add(x, y);
			calculator();
		} else if (response.toLowerCase() === 'restar' || response == 2) {
			subtract(x, y);
			calculator();
		} else if (response.toLowerCase() === 'multiplicar' || response == 3) {
			multiply(x, y);
			calculator();
		} else if (response.toLowerCase() === 'dividir' || response == 4) {
			divide(x, y);
			calculator();
		}
	}
}
calculator();

//HACER Q VUELVA AL MENU PRINCIPAL--->HECHO

function add(x, y) {
	let resultA = Number(x) + Number(y);
	alert(`El resultado de sumar ${x} mas ${y} es ${resultA}`);
	return resultA;
}

function subtract(x, y) {
	let resultS = Number(x) - Number(y);
	alert(`El resultado de restar ${x} menos ${y} es ${resultS}`);
	return resultS;
}

function multiply(x, y) {
	let resultM = Number(x) * Number(y);
	alert(`El resultado de multiplicar ${x} por ${y} es ${resultM}`);
	return resultM;
}

function divide(x, y) {
	let resultD = Number(x) / Number(y);
	alert(`El resultado de dividir ${x} entre ${y} es ${resultD}`);
	return resultD;
}
