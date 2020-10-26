'use strict';

// 1.Haz un programa con prompt y alert donde se muestre un modal con un mensaje "Añade el numero que quieras sumar. Si quieres ver el total escribe 'total'". Cuando añada un numero sumalo, y muestrale otra vez el modal para que pueda añadir tantos numeros como quiera. Una vez el usuario escriba 'total', se mostrará en un alert el resultado de la suma y ya no se mostrará más los modales

const calculateSum = 'total';
const message = `Añade el número que quieras sumar. Si quieres ver el total escribe ${calculateSum}`;
let answer = '';
let result = 0;

function addNumbers(message, calculateSum) {
	while (answer.toLowerCase() != calculateSum) {
		result += Number(answer);
		answer = prompt(message);

		if (answer.toLowerCase() === calculateSum) {
			alert(result);
		}
	}
}

addNumbers(message, calculateSum);
