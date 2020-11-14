// // pojo (plain old javascript object)

// let user = {
// 	name: 'jonay',
// 	Age: 9,
// };

// hasLegalAge();

// //  Clase -> molde de galletas

// //  Instancia -> galleta

// //  Encapsulacion, herencia(delegacion de metodos), polimorfismo

// //Tradicional

// function User() {
// 	this.name = 'jonay';
// 	this.age = 9;

// 	this.hasLegalAge = function() {
// 		return this.age >= 18;
// 	};
// }

// let user = new User();

// //Moderna

// class User {
// 	constructor(name, age) {
// 		this.name = 'jonay';
// 		this.age = 9;
// 	}

// 	hasLegalAge() {
// 		return this.age >= 18;
// 	}
// }
// let user = new User();

// // la mia
// //el patron module

// function User() {
// 	let legalAge = 18;
// 	let name = 'jonay';
// 	let age = 9;
// 	return {
// 		name: name,
// 		age: age,
// 		hasLegalAge: hasLegalAge,
// 	};

// 	function hasLegalAge() {
// 		return this.age >= legalAge;
// 	}
// }
// let user = User();

// //Constructor

// function User(initialName, initialAge) {
// 	let name = initialName;
// 	let age = initialAge;
// 	return {
// 		name: name,
// 		age: age,
// 		hasLegalAge: hasLegalAge,
// 	};

// 	function hasLegalAge() {
// 		return age >= 18;
// 	}
// }

// function User(name, age) {
// 	return {
// 		name: name,
// 		age: age,
// 		hasLegalAge: hasLegalAge,
// 	};

// 	function hasLegalAge() {
// 		return age >= 18;
// 	}
// }

// let user = User('jonay', 9);

// //  los metodos get y set

// function User() {
// 	let legalAge = 18;
// 	let name = 'jonay';
// 	let age = 9;
// 	return {
// 		name: name,
// 		age: age,
// 		hasLegalAge: hasLegalAge,
// 		getName: getName,
// 		setName: setName,
// 	};

// 	function hasLegalAge() {
// 		return this.age >= legalAge;
// 	}

// 	function getName() {
// 		return name;
// 	}

// 	function setName(newName) {
// 		name = newName;
// 	}
// }

//  1. Crea una clase usuario con la propiedad nombre, esta clase tendrás un metodo que sea welcomeMessage
//  y retornará`¡Hola ${name}!`. Tras lo cual instancia la clase e imprime su mensaje de bienvenida por pantalla.

function User2(name) {
	return {
		name: name,
		welcomeMessage: welcomeMessage,
	};

	function welcomeMessage() {
		return `¡Hola ${name}!`;
	}
}

let user2 = User2('Jonay');
// console.log(user2.welcomeMessage());

// 2. Crea una clase llamada Cuenta(Account) que tendrá los siguientes atributos: user (que es una persona) y amount (puede tener decimales). Construye los siguientes métodos para la clase:

// -Un constructor, donde los datos pueden estar vacíos.
// -Los setters y getters para cada uno de los atributos. El atributo no se puede modificar directamente, sólo ingresando o retirando dinero.
// -La cantidad(amount) tendrá get pero no set.
// -FormatCount(): Devuelve la cantida en un formato. $`La cantidad actual es {quatity}`.
// -add(quantity): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
// -subtract(quantity): se retira una cantidad a la cuenta. Si no se tiene dinero la funcion devolverá cero.

//  extra: El titular será obligatorio y la cantidad es opcional.

function Account(user, amount) {
	return {
		user: user,
		amount: amount,
		getUser: getUser,
		setUser: setUser,
		getAmount: getAmount,
		formatCount: formatCount,
		add: add,
		subtract: subtract,
	};

	function getUser() {
		return user;
	}

	function setUser(newUser) {
		user = newUser;
	}

	function getAmount() {
		return amount;
	}

	function formatCount() {
		return `La cantidad actual es ${amount} €`;
	}

	function add(quantity) {
		quantity < 0 ? amount : (amount += quantity);
	}

	function subtract(quantity) {
		amount === 0 ? 0 : (amount -= quantity);
	}
}

let account = Account('Powerkyria', 300);
console.log(account.getUser());
account.add(23);
console.log(account.formatCount());
account.subtract(3);
console.log(account.getAmount());
