'use strict';

// 1.Crea dos funciones que imprima los primeros 100 de la secuencia Fibonacci. Una función debe funcionar de manera iterativa y otra de manera recursiva.

// 0, 1, 1, 2, 3 ,5 , 8 ,13, 21, 34

//ITERATIVA

function printNumbers() {
	let numberOne = 0;
	let numberTwo = 1;
	let newNumber = 0;
	for (let i = 0; i < 100; i++) {
		newNumber = numberOne + numberTwo;
		numberOne = numberTwo;
		numberTwo = newNumber;
		console.log(newNumber);
	}
}
// printNumbers();

//RECURSIVA REVISAR Y SOLUCIONAR--->HECHO

function printNumbers2(acc, n1, n2) {
	let result = n1 + n2;
	n1 = n2;
	n2 = result;

	if (acc < 100) {
		acc++;
		console.log(result);
		printNumbers2(acc, n1, n2);
	}
}
// printNumbers2(0, 0, 1);

//EJEMPLO DE RECURSIVIDAD

// function recursiveExample(number) {
// 	if (number !== 100) {
// 		console.log(number);
// 		number++;
// 		recursiveExample(number);
// 	}
// }
// recursiveExample(0);

// 2. Ahora haz que estas dos funciones sean parametrizables. Y en lugar de imprimir los 100 primeros números, imprimirá la cantidad de números que se le pasen por parámetro.

function printNumbers3(n) {
	let numberOne = 0;
	let numberTwo = 1;
	let newNumber = 0;

	for (let i = 0; i < n; i++) {
		newNumber = numberOne + numberTwo;
		numberOne = numberTwo;
		numberTwo = newNumber;
		console.log(newNumber);
	}
}
// printNumbers3(4);

function printNumbers4(acc, n1, n2, veces) {
	let result = n1 + n2;
	n1 = n2;
	n2 = result;

	if (acc < veces) {
		acc++;
		console.log(result);
		printNumbers4(acc, n1, n2, veces);
	}
}
// printNumbers2(0, 0, 1, 5);
