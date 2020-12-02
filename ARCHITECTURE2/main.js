'use strict';


// 1.Crea tres clases. View, Presenter y Client.
// Tambien vamos a usar la api de star wars para traernos algunos personajes de la pelicula:
// https://swapi.dev/api/people

// La clase presenter va aceptar por el constructor las clases view y client, tendrá un metodo Execute.
// Este metodo tomará la clase client, usará el metodo de la instancia de client,FindStarWarsPeople.

// El metodo de la clase cliente FindStarWarsPeople tomará un funcion como parametro, un callback.
// Una vez se traiga los datos pasará al callback dicha información.

// El presenter le pasará por parametro al metodo FindStarWarsPeople un callback.
// Dicho callback recibirá la información de los personajes de star wars
// y se los pasará a un metodo de la vista(view), showPeople.
// El metodo showPeople cogerá la informacion y la pintará en el html.
// Mostrando, name, birth_year, eye_color, height

// Basicamente esta arquitectura ayuda a separar la persistencia  "el cliente" de "la vista" y conecta ambos por medio de un presenter
// el html que uses para el ejercicio, puede ser sin estilos. Y solo con los texto en una caja

// practicamente esta arquitectura la puedes usar para cualquier front que hagas y no quieras utilizar frameworks.

// Para componente con comportamiento en el html, lo puedes gestionar con una vista y un presenter. Cuando necesites tratar con informacion que persista, ya sea una api o un archivo, puedes usar un cliente o modelo para esta funcion.

// Consejos: empieza por la clase client, y has pruebas para ver si funciona la llamada a la api.Tras lo cual programa la vista pasandole datos falsos. Y por ultimo los conectes a traves del presenter

(function() {

})();
