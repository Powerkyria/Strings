'use strict';

// Haz una funcion que acepte un array de números por parametro y que te retorne un array con los numeros ordenados, sin usar el metodo sort().

// CON MATH.MAX()

const randomNumbers = [ 23, 34, 5, 10, 8 ];

function orderNumbers(numbers) {
	let numbersInOrder = [];

	for (let i = 0; (i = numbers.length); i++) {
		let maxNumber = Math.max(...numbers);
		const index = numbers.indexOf(maxNumber);
		const deleteMaxNumber = +numbers.splice(index, 1);
		numbersInOrder.push(deleteMaxNumber);
	}
	return numbersInOrder;
}

const result = orderNumbers(randomNumbers);
// console.log(result);

// CON FOR

const myNumbers = [ 23, 34, 5, 10, 8 ];

function orderNumbersWithFor(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length - 1; j++) {
			if (numbers[j] < numbers[j + 1]) {
				let aux = numbers[j];
				numbers[j] = numbers[j + 1];
				numbers[j + 1] = aux;
			}
		}
	}
	return myNumbers;
}

const result2 = orderNumbersWithFor(myNumbers);
console.log(result2);

// SOLUCION JG

function order() {
	let numbers = [ 389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131 ];

	for (let j = 0; j < numbers.length; j++) {
		for (let i = 0; i < numbers.length - 1; i++) {
			if (numbers[i] > numbers[i + 1]) {
				let aux = numbers[i];
				numbers[i] = numbers[i + 1];
				numbers[i + 1] = aux;
			}
		}
	}
	// console.log(numbers);
}
order();
