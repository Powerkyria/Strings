'use strict';

// Haz una funcion que acepte un array de números por parametro y que te retorne un array con los numeros ordenados

// SIN SORT

const randomNumbers = [ 23, 34, 5, 10, 8, 17, 9, 2, 89 ];

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
console.log(result);
