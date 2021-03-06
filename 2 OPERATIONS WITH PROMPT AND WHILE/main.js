'use strict';

// 2.Haz un prompt donde aparezca las siguientes opciones. 1.Sumar,2.Restar,3.Multiplicar,4.Dividir,5.Salir . Una vez elegida saldrá otro prompt donde el usuario ingresará dos numero separandolos por "-" ejemplo: "2-8" o "10-45". Un vez hecho ejecutar la accion apropiada tras lo cual deberas mostrar el resultado en un alert con el siguiente formato "El resultado de multiplicar 2 por 8 es 16" o "el resultado de restar 2 mas 8 es 10" asi por cada operación. Tras cerrar el modal. Se volverá al menú inicial para que el usuario escoja una opcion. Y en caso de selecionar la opcion 5 salir el programa se cerrará.

// //PEDIR DOS NUMEROS SEPARADOS X UN GUION
// const askForNumbers = 'Ingrese dos números separados por un guión';
// let numbers = prompt(askForNumbers, ''+'-'+'');

// const indexOfX= numbers.indexOf('-') - 1;
// const indexOfY= numbers.indexOf('-') + 1;
// let x = numbers.charAt(indexOfX);
// let y = numbers.charAt(indexOfY);

//BUCLE RECURSIVO: UNA FUNCION QUE SE LLAMA A SI MISMA

function calculator() {
	const message = `Eliga una opción:

1.Sumar, 2.Restar, 3.Multiplicar, 4.Dividir, 5.Salir`;
	let response = prompt(message);
	const exitMessage = 'salir';

	if (response.toLowerCase() !== exitMessage && response !== '5') {
		const messageNumberOne = 'Ingrese un número';
		const messageNumberTwo = 'Ingrese otro número';
		let x = prompt(messageNumberOne);
		let y = prompt(messageNumberTwo);

		if (response.toLowerCase() === 'sumar' || Number(response) === 1) {
			add(x, y);
		} else if (response.toLowerCase() === 'restar' || Number(response) === 2) {
			subtract(x, y);
		} else if (response.toLowerCase() === 'multiplicar' || Number(response) === 3) {
			multiply(x, y);
		} else if (response.toLowerCase() === 'dividir' || Number(response) === 4) {
			divide(x, y);
		}
		calculator();
	}
}
// calculator();

//EJEMPLO DE RECURSIVIDAD

function recursiveExample(number){
	if(number !== 100){
		console.log(number);
		number++;
		recursiveExample(number);
	}
}
recursiveExample(0);



// BUCLE ITERATIVO: EJECUTA EL BLOQUE DE CODIGO nº VECES

function calculator2() {
	let response='';
	
	while (isOptionClose(response)) {

		const message = `Eliga una opción: 1.Sumar, 2.Restar, 3.Multiplicar, 4.Dividir, 5.Salir`;
		response = prompt(message);
		
		const messageNumberOne = 'Ingrese un número';
		const messageNumberTwo = 'Ingrese otro número';

		if (isOptionAdd(response)) {
			let x = prompt(messageNumberOne);
			let y = prompt(messageNumberTwo);
			add(x, y);
		} else if (isOptionSubtract(response)) {
			let x = prompt(messageNumberOne);
			let y = prompt(messageNumberTwo);
			subtract(x, y);
		} else if (isOptionMultiply(response)) {
			let x = prompt(messageNumberOne);
			let y = prompt(messageNumberTwo);
			multiply(x, y);
		} else if (isOptionDivide(response)) {
			let x = prompt(messageNumberOne);
			let y = prompt(messageNumberTwo);
			divide(x, y);
		}
	}
}
// calculator2();


function calculator3() {
	let response='';
	
	while (isOptionClose(response)) {

		const message = `Eliga una opción: 1.Sumar, 2.Restar, 3.Multiplicar, 4.Dividir, 5.Salir`;
		response = prompt(message);

		if (isOptionAdd(response)) {
			showNumberToOperate(add);
		} else if (isOptionSubtract(response)) {
			showNumberToOperate(subtract);
		} else if (isOptionMultiply(response)) {
			showNumberToOperate(multiply);
		} else if (isOptionDivide(response)) {
			showNumberToOperate(divide);
		}
	}
}
// calculator3();

//EJEMPLO DE DECORADOR: PASAR X PARAMETRO UNA FUNCION Y DECORARLA CON UNA NUEVA FUNCIONALIDAD

function showNumberToOperate(x){
	const messageNumberOne = 'Ingrese un número';
	const messageNumberTwo = 'Ingrese otro número';
	let numberOne = prompt(messageNumberOne);
	let numberTwo = prompt(messageNumberTwo);
	x(numberOne, numberTwo);
}


function isOptionAdd(response){
	return response.toLowerCase() === 'sumar' || response === '1';
}

function isOptionSubtract(response){
	return response.toLowerCase() === 'restar' || response === '2';
}

function isOptionMultiply(response){
	return response.toLowerCase() === 'multiplicar' || response === '3';
}

function isOptionDivide(response){
	return response.toLowerCase() === 'dividir' || response === '4';
}

function isOptionClose(response){
	const exitMessage = 'salir';
	return response.toLowerCase() !== exitMessage && response !== '5';
}

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
