'use strict';

// 1.Crea una clase Rectangulo(Rectangle), Circulo(circle) y Triangulo(Triangle).
// - La clase Rectangle tendrá un contructor donde reciba el alto y el ancho.
// - La clase Circle tendrá un contructor donde reciba el radio.
// - La clase Triangle tendrá un contructor donde reciba uno de sus lados. 
// Para simplificar vamos a suponer que sus 3 lados son iguales.

// - La clase Rectangle tendrá un metodo que se llamará calculateArea() 
// y retornará su area usando la informacion que se la paso por el contructor.
// Te dejo la formulas porque esto es una clase de programacion no de matematicas.
// Area = alto x ancho
// - La clase Circle tendrá un metodo que se llamará calculateArea() 
// y retornará su area usando la informacion que se la paso por el contructor.
// Te dejo la formulas porque esto es una clase de programacion no de matematicas.
// Area =  pi(3,14) * radio²
// no se como escribir radio 
// - La clase Triangle tendrá un metodo que se llamará calculateArea() 
// y retornará su area usando la informacion que se la paso por el contructor.
// Te dejo la formulas porque esto es una clase de programacion no de matematicas.
// Area = (√3/4) * a²

// probablemente te haga falta usar el metodo "Math.pow()" y "Math.sqrt()".

// 2. Crea una array y guarda dentro una instacia de Rectangle, Circle y Triangle.
// Recorre el array y imprime por consola el valor del area de cada forma geometrica usando el metodo previamente creado de calculateArea.

// ¿Te acuerdas que ibamos a ver un ejemplo de polimorfismo? Aqui lo tienes. 
// Rectangle, Circle y Triangle son objetos distintos pero al todos tener el metodo calculateArea.
// Puedes tratarlos todos como forma geometricas y imprimir su area aunque todos sean diferentes.

// Recuerdas la clase usuario que ya habias hecho previamente pues la vamos a volver a utilizar.

// 1.Añadele las propiedades age y password.

// 2. Crea un metodo que convierta una instancia de usuario a pojo de un usuario ConvertToPojo.
// Este metodo recibirá una instacia de la clase usuario por parametro y retornará un pojo con la informacion del usuario.

// 3. Crea un metodo que convierta un pojo con la informacion del usuario a una instancia de tu clase User, ConvertToUser.
// Este metodo recibirá un pojo con la informacion del usuario por parametro y retornará un pojo con la informacion del usuario.

// Los pojos. Plain old javascript object. Son necesarios para compartir informacion entre cliente y servidor.
// Como pasa en el caso de las apis.
// Pero no es posible compartir clases entre cliente y servidor.
// Esto es debido al que el comportamiento como por ejemplo el metodo "hasLegalAge()" esta escrito en js pero
// el servidor puede trabajar diferentes lenguakes en java, c#, php, etc. 
// Estos lenguajes normalmente no son compatibles con js.
// Por esto al compartir informacion es posible que tengas que hacer esta clase de conversiones.