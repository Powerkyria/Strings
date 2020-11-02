// 'use strict';

let products = [
	{
		name: 'Televisor Xiaomi',
		description: 'Caja mágica donde vive gente pequeña esclavisada',
		category: 'computing',
		stars: 0,
		price: 179,
	},
	{
		name: 'Mp3',
		description: 'Mucho más que un reproductor de música, es el corazón de una persona',
		category: 'computing',
		stars: 5,
		price: 11,
	},
	{
		name: 'Ratón',
		description: 'Principal causa de tunel carpiano entre los gamers',
		category: 'computing',
		stars: 1,
		price: 11.5,
	},
	{
		name: 'Teclado',
		description: 'Principal causa de tunel carpiano entre los programadores',
		category: 'computing',
		stars: 1,
		price: 11.5,
	},
	{
		name: 'Tableta grafica',
		description: 'Una de las numerosas causa de tunel carpiano entre los diseñadores graficos e ilustradores',
		category: 'computing',
		stars: 3,
		price: 11.5,
	},
	{
		name: 'Libro de Comunicacion No violenta',
		description: 'Es un libro muy fino, no sirve para pegarselo en la cara a quien te caiga mal',
		category: 'books',
		stars: 5,
		price: 16.99,
	},
	{
		name: 'Almogrote',
		description: 'La rica salsa canaria, combinada con un de los mejores quesos del mundo',
		category: 'food',
		stars: 100000000000000000000000000,
		price: 7.75,
	},
	{
		name: 'Padre Rico, Padre pobre',
		description: 'El padre mas rico es el que menos dinero dá a sus hijos',
		category: 'books',
		stars: 5,
		price: 7.75,
	},
	{
		name: 'js, the good parts',
		description: 'El peor libro de js que he leido en la vida',
		category: 'books',
		stars: 0,
		price: 9.99,
	},
];

// // 1. Haz una función que acepte esta lista de productos y devuelva solo los productos de informatica

// CON FOR ---> HECHO!

function getComputingProducts(object) {
	let computingProducts = [];
	for (let i = 0; i < object.length; i++) {
		if (object[i].category === 'computing') {
			computingProducts.push(object[i]);
		}
	}
	return computingProducts;
}
const result = getComputingProducts(products);
// console.log(result);

//CON FOR...OF ----> HECHO

function myProductOfCOmputing(products) {
	let array = [];
	for (const product of products) {
		if (product.category === 'computing') {
			array.push(product);
		}
	}
	return array;
}
const newResult = myProductOfCOmputing(products);
// console.log(newResult);

// CON FILTER ---> HECHO

const computingProducts = products.filter((object) => object.category === 'computing');
// console.log(computingProducts);

// // 2. Haz una función que acepte esta lista de productos y devuelva la misma lista de productos pero sin la descripcion

// CON FOR ---> HECHO

function sameProductsWithoutDescription(element) {
	let elementsWithoutDescription = [];
	for (let i = 0; i < element.length; i++) {
		delete element[i].description;
		elementsWithoutDescription.push(element[i]);
	}
	return elementsWithoutDescription;
}

const elements = sameProductsWithoutDescription(products);
// console.log(elements);

//CON FOR...OF ---> HECHO

function myProductsWithoutDescription(products) {
	let newArray = [];
	for (const product of products) {
		delete product.description;
		newArray.push(product);
	}
	return newArray;
}
const withoutDescription = myProductsWithoutDescription(products);
// console.log(withoutDescription)

// CON FILTER ----> HECHO!

const productsWithoutDescription = products.filter((object) => delete object.description);
// console.log(productsWithoutDescription);

// // 3. Haz una función que acepte esta lista de productos y devuelva solo los libros de 5 estrellas

// CON FOR ---> HECHO
function onlyBooksFiveStars(obj) {
	let myBooksFiveStars = [];
	for (let i = 0; i < obj.length; i++) {
		if (obj[i].category === 'books' && obj[i].stars === 5) {
			myBooksFiveStars.push(obj[i]);
		}
	}
	return myBooksFiveStars;
}
const myBettersBooks = onlyBooksFiveStars(products);
// console.log(myBettersBooks);

//CON FOR...OF ---> HECHO
function onlyBooksFiveStars(products) {
	let bestBooks = [];
	for (const product of products) {
		if (product.category === 'books' && product.stars === 5) {
			bestBooks.push(product);
		}
	}
	return bestBooks;
}
const myBettersBooks2 = onlyBooksFiveStars(products);
// console.log(myBettersBooks2);

// CON FILTER ---> HECHO

const onlyBooksFiveStars3 = products.filter((object) => object.category === 'books' && object.stars === 5);
// console.log(onlyBooksFiveStars3);

// // 4. Haz una función que acepte esta lista de productos y que devuelva los productos ordenados de mayor a menor precio.

// CON FOR ---> HECHO

function orderProducts(products) {
	let priceOfProducts = [];
	for (let i = 0; i < products.length; i++) {
		priceOfProducts.push(products[i]);
		priceOfProducts.sort((a, b) => b.price - a.price);
	}

	return priceOfProducts;
}
const myProductsInOrderfalling = orderProducts(products);
// console.log(myProductsInOrderfalling);

//CON FOR...OF ---> HECHO

function orderProducts2(products) {
	let arrayOfProducts = [];
	for (const product of products) {
		arrayOfProducts.push(product);
		arrayOfProducts.sort((a, b) => b.price - a.price);
	}
	return arrayOfProducts;
}
const myProductsInOrderfalling2 = orderProducts2(products);
// console.log(myProductsInOrderfalling2);

// CON MAP ---> HECHO

const orderProductsForPrice = products.map((articulo) => articulo).sort((a, b) => b.price - a.price);
// console.log(orderProductsForPrice);

// // 5. Haz una función que acepte esta lista de productos y que devuelva solo los nombres de los productos ordenados por orden alfabetico.

// CON FOR ---> HECHO

function orderProductsNames(products) {
	let nameOfProducts = [];
	let orderArray = [];
	for (let i = 0; i < products.length; i++) {
		nameOfProducts.push(products[i].name);
	}
	for (let i = 0; i < nameOfProducts.length; i++) {
		orderArray.push(nameOfProducts[i].charAt(0).toUpperCase() + nameOfProducts[i].slice(1));
		orderArray.sort();
	}
	return orderArray;
}
const myProductsInOrderForName = orderProductsNames(products);
// console.log(myProductsInOrderForName);

// CON FOR... OF ---> HECHO

function orderProductsNames2(products) {
	let myProducts = [];
	let orderArray = [];
	for (const product of products) {
		myProducts.push(product.name);
	}
	for (const myProduct of myProducts) {
		orderArray.push(myProduct.charAt(0).toUpperCase() + myProduct.slice(1));
		orderArray.sort();
	}
	return orderArray;
}
const myProductsInOrderForName2 = orderProductsNames2(products);
// console.log(myProductsInOrderForName2);

// CON MAP ---> HECHO

const orderProductsForName = products.map((articulo) => articulo.name.charAt(0).toUpperCase() + articulo.name.slice(1)).sort();
// console.log(orderProductsForName);

// ----------------
// CON FOR Y METODO LOCALCOMPARE---> HECHO

function orderProductsForNames(products) {
	let nameOfProducts = [];
	for (let i = 0; i < products.length; i++) {
		nameOfProducts.push(products[i].name);
		nameOfProducts.sort((a, b) => a.localeCompare(b));
	}
	return nameOfProducts;
}
const productsInOrderForName = orderProductsForNames(products);
// console.log(productsInOrderForName);

// CON FOR... OF Y METODO LOCALECOMPARE---> HECHO

function orderProductsName(products) {
	let myProducts = [];
	for (const product of products) {
		myProducts.push(product.name);
		myProducts.sort((a, b) => a.localeCompare(b));
	}
	return myProducts;
}
const myProductsInOrderForName3 = orderProductsName(products);
// console.log(myProductsInOrderForName3);

// CON MAP Y METODO LOCALECOMPARE (para que no tenga en cuenta minúsculas, mayúsculas, tildes etc)---HECHOS

const orderProductsForName2 = products.map((articulo) => articulo.name).sort((a, b) => a.localeCompare(b));
// console.log(orderProductsForName2);
