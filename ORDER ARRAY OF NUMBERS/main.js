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
	let numbersInOrder = [];

	for (let i = 0; i < numbers.length; i++) {
		for (let j = 1; j < numbers.length; j++) {
			if (numbers[i] <= numbers[j]) {	
				
				numbersInOrder.push(numbers[i] );
			}
			console.log(numbers[i] + '-' + numbers[j]);
		}
	}
	return numbersInOrder;
}

const result2 = orderNumbersWithFor(myNumbers);
console.log(result2);
