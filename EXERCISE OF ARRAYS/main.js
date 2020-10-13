'use strict';

//3. DADO UN ARRAY DE NUMEROS QUIERO UNA FUNCION QUE DEVUELVA UN ARRAY QUE DIGA SI SON PARES O IMPARES LOS NUMEROS QUE OCUPAN ESA POSICION. ejemplo. La función recibe [0, 2, 4, -6, 7] y devuelve [par,  par, par, par,  impar]

const numbersArray = [ 0, 2, 4, -6, 7, 9 ];
let newArray = [];
function evenOdd(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			newArray.push('par');
		} else {
			newArray.push('impar');
		}
	}
	return newArray;
}

const result = evenOdd(numbersArray);
console.log(result);

// 4 DADO UN ARRAY DE NUMEROS QUIERO UNA FUNCTION QUE RETORNE LA MEDIA FORMADA POR LOS NUMEROS DE DICHO ARRAY

const numbers = [ 2, 4, 6 ];
let acc = 0;

function average(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		acc += numbers[i] / numbers.length;
	}
	return acc;
}
const result2 = average(numbers);
console.log(result2);
