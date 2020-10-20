'use strict';

// 1.Hacer un programa con un prompt y un alert y un bucle while, donde se muestre un mensaje en un modal con una opcion de respuesta(para eso es el prompt). Dicho mensaje pondrá "¿Que mensaje quieres que pinte?, escribe 'terminar' para cerrar los modales". A continuación abre otro modal, este solo con un mensaje, el que haya escrito el usuario. Tras lo cual se volverá a abrir el primer modal pidiendo un mensaje nuevo para pintar. Asi continuamente hasta que el usuario quiera parar. Cuando el usuario quiera parar escribir "terminar" como mensaje. Cuando esto ocurra el bucle while terminará

const question = "¿Qué mensaje quieres que pinte? Escribe 'terminar' para cerrar los modales";
const exitMessage = 'terminar';
let answer;

function message(question, exitMessage) {
	do {
		answer = prompt(question);
		alert(answer);
	} while (answer.toLowerCase() != exitMessage);
}

message(question, exitMessage);
