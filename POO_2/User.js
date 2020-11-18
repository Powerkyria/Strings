'use strict';

// Recuerdas la clase usuario que ya habias hecho previamente (en la capeta POO) pues la vamos a volver a utilizar.

// 1.Añadele las propiedades age y password.

module.exports = function User(name, age, password) {
	return {
		name,
		age,
		password,
		welcomeMessage,
		convertToPojo,
		convertToUser,
	};

	function welcomeMessage() {
		return `¡Hola ${name}!`;
	}

	// 2. Crea un metodo que convierta una instancia de usuario a pojo de un usuario ConvertToPojo.
	// Este metodo recibirá una instacia de la clase usuario por parametro y retornará un pojo con la informacion del usuario.

	function convertToPojo(user) {
		return {
			name: user.name,
			age: user.age,
			password: user.password,
		};
	}

	// 3. Crea un metodo que convierta un pojo con la informacion del usuario a una instancia de tu clase User, ConvertToUser.
	// Este metodo recibirá un pojo con la informacion del usuario por parametro y retornará una instancia de la clase user con la informacion que contiene el pojo.

	function convertToUser(pojo) {
		let newUser = User(pojo.name, pojo.age, pojo.password);
		return newUser;
	}
};

// Los pojos. Plain old javascript object. Son necesarios para compartir informacion entre cliente y servidor.
// Como pasa en el caso de las apis.
// Pero no es posible compartir clases entre cliente y servidor.
// Esto es debido al que el comportamiento como por ejemplo el metodo "hasLegalAge()" esta escrito en js pero
// el servidor puede trabajar diferentes lenguakes en java, c#, php, etc.
// Estos lenguajes normalmente no son compatibles con js.
// Por esto al compartir informacion es posible que tengas que hacer esta clase de conversiones.
