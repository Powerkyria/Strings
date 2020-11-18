'use strict';

// 1.Crea dos funciones que imprima los primeros 100 de la secuencia Fibonacci. Una función debe funcionar de manera iterativa y otra de manera recursiva.

//ITERATIVA

function printNumbers() {
	// 0, 1, 1, 2, 3 ,5 , 8 ,13, 21, 34
	let numberOne= 0;
	let numberTwo= 1;
	let newNumber;

	let fibonachiNumbers=[numberOne, numberTwo]

	for (let i = 0; i < 100; i++) {
		newNumber = numberOne + numberTwo;
		fibonachiNumbers.push(newNumber);
		numberOne = numberTwo;
		numberTwo = newNumber;
	}
	console.log(fibonachiNumbers);
}
// printNumbers();


//RECURSIVA REVISAR Y SOLUCIONAR

function printNumbers2(acc) {
	// 0, 1, 1, 2, 3 ,5 , 8 ,13, 21, 34
	let numberOne= 0;
	let numberTwo= 1;
	let newNumber;

	let fibonachiNumbers=[numberOne, numberTwo]

		newNumber = numberOne + numberTwo;
		fibonachiNumbers.push(newNumber);
		numberOne = numberTwo;
		numberTwo = newNumber;
	
	if(fibonachiNumbers.length < acc){
		printNumbers2();
	}
	console.log(fibonachiNumbers);
}
printNumbers2(100);


// 2. Ahora haz que estas dos funciones sean parametrizables. Y en lugar de imprimir los 100 primeros números, imprimirá la cantidad de números que se le pasen por parámetro.

function printNumbers3(n) {
	// 0, 1, 1, 2, 3 ,5 , 8 ,13, 21, 34
	let numberOne= 0;
	let numberTwo= 1;
	let newNumber;

	let fibonachiNumbers=[numberOne, numberTwo]

	for (let i = 0; i < n; i++) {
		newNumber = numberOne + numberTwo;
		fibonachiNumbers.push(newNumber);
		numberOne = numberTwo;
		numberTwo = newNumber;
	}
	console.log(fibonachiNumbers);
}
// printNumbers3(9);
//SIEMPRE HAY DOS MAS XQ EL ARRAY YA COMIENZA CON DOS NUMEROS DENTRO

function printNumbers4(veces) {
	// 0, 1, 1, 2, 3 ,5 , 8 ,13, 21, 34
	let numberOne= 0;
	let numberTwo= 1;
	let newNumber;

	let fibonachiNumbers=[numberOne, numberTwo]

	for (let i = 0; i < veces; i++) {
		newNumber = numberOne + numberTwo;
		fibonachiNumbers.push(newNumber);
		numberOne = numberTwo;
		numberTwo = newNumber;
	}
	
	if(fibonachiNumbers.length < veces){
		printNumbers4(veces);
	}
	console.log(fibonachiNumbers);
}
// printNumbers4(2);