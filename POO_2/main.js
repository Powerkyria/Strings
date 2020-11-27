'use strict';

//IIFE, Immediately-invoked Function Expressions: CREA UN SCOPE INDEPENDIENTE PARA TRABAJAR

//METODO PARA IMPORTAR E IMPORTAR CODIGO/LIBRERIAS
let namespace = {
	message: function() {
		console.log('Jonay mola');
	},
};

(function(namespace) {
	//POLIMORFISMO:

	// 1.Crea una clase Rectangulo(Rectangle), Circulo(circle) y Triangulo(Triangle).
	// - La clase Rectangle tendrá un contructor donde reciba el alto y el ancho.
	// - La clase Circle tendrá un contructor donde reciba el radio.
	// - La clase Triangle tendrá un contructor donde reciba uno de sus lados.(Triangulo equilatero)

	// - La clase Rectangle tendrá un metodo que se llamará calculateArea()
	// y retornará su area usando la informacion que se la paso por el contructor.
	// Area Rectangulo = alto x ancho.

	// - La clase Circle tendrá un metodo que se llamará calculateArea()
	// y retornará su area usando la informacion que se la paso por el contructor.
	// Area Circulo=  pi(3,14) * radio².

	// - La clase Triangle tendrá un metodo que se llamará calculateArea()
	// y retornará su area usando la informacion que se la paso por el contructor.
	// Area Triangulo= (√3/4) * a².

	// Metodo para elevar al exponente:"Math.pow(base, exponente)"
	// Metodo para hallar raiz cuadrada "Math.sqrt(n)".

	// IMPORTAR ARCHIVO CON NODE
	const Rectangle = require('./geometricShape/Rectangle');
	const Circle = require('./geometricShape/Circle');
	const Triangle = require('./geometricShape/Triangle');
	const User = require('./User');

	// 2. Crea una array y guarda dentro una instacia de Rectangle, Circle y Triangle.
	// Recorre el array e imprime por consola el valor del area de cada forma geometrica usando el metodo previamente creado de calculateArea.

	function main() {
		namespace.message();

		let rectangle = Rectangle(2, 4);
		console.log(rectangle.calculateArea());
		let circle = Circle(6);
		console.log(circle.calculateArea());
		let triangle = Triangle(6);
		console.log(triangle.calculateArea());

		const rectangle2 = Rectangle(2, 2);
		const circle2 = Circle(3);
		const triangle2 = Triangle(3);

		let array = [ rectangle2, circle2, triangle2 ];

		let paintArea = array.map((instance) => instance.calculateArea());
		console.log(paintArea);

		let user1 = User('Jonay');
		console.log(user1.welcomeMessage());

		let user2 = User('Powerkyria', 34, 'potatxio');
		console.log(user2.convertToPojo(user2));

		let user3 = {
			name: 'Carlos',
			age: 21,
			password: 'baticueva',
		};

		console.log(user2.convertToUser(user3));
	}
	main();

	// ¿Te acuerdas que ibamos a ver un ejemplo de polimorfismo? Aqui lo tienes.
	// Rectangle, Circle y Triangle son objetos distintos pero al todos tener el metodo calculateArea.
	// Puedes tratarlos todos como forma geometricas y imprimir su area aunque todos sean diferentes.

	namespace.Circle = Circle;
})(namespace);
console.log(namespace);
