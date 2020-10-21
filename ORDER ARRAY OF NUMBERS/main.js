'use strict';

// Haz una funcion que acepte un array de números por parametro y que te retorne un array con los numeros ordenados

// SIN SORT

const randomNumbers = [ 23, 34, 5, 8, 10 ];

function orderNumbers(numbers) {
	let numbersInOrder = [];

	for (let i = 0; i < numbers.length; i++) {
		if (randomNumbers[i] < randomNumbers[i] + 1) {
			numbersInOrder.push(randomNumbers[i]);
		}
		console.log(numbersInOrder);
	}
	return numbersInOrder;
}

orderNumbers(randomNumbers);
