'use strict';

/*  La contraseña será valida si tiene al menos 6 caracteres,
 contiene al menos una letra mayúscula, 
 contiene al menos una letra minúscula, 
 tiene una barra baja "_" 
 y tiene al menos 1 numero.
 Si alguna de esas condiciones no se cumple la contraseña no será valida.
 sin expresiones regulares
*/

// const regEx = /^[0-9]+[a-z]+[A-Z]+[_]{6,}$/gm;


function validatePassword(password) {
	console.log(regEx.test(password));

		if (password.includes()) {
			return 'La contraseña es valida';
		} else {
			return 'La contraseña no es valida';
		}
}

const result = validatePassword("Hawai_5");
console.log(result);