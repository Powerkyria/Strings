'use strict';

// Una arquitectura de software, también denominada arquitectura lógica, consiste en un conjunto de patrones y abstracciones coherentes que proporcionan un marco definido y claro para interactuar con el código fuente del software.

// veremos una muy usada y que puedes usar en front muy parecida a modelo vista controller y en realidad es practicamente igual
// Vamos hoy a usar un poco de poo orientada al front.

// 1.Crea tres clases. View, Presenter y Client.
// Tambien vamos a usar la api de star wars para traernos algunos personajes de la pelicula:
// https://swapi.dev/api/people

// Vamos a usar la arquitectura modelo, vista, presenter que es muy parecida a la arquitectura modelo vista controller.
// Esta es un arquitectura muy usada, tanto en frontend como en backend.
// Probablemente esta arquitectura junto con la de modelo vista controller sean 2 de las mas usadas.
// En esta arquitectura la vista se encarga de la responsabilidad de gestionar la interfaz de usuario.
// El modelo de la persistencia.En este caso nuestra clase client tomará está responsabilidad trayendo los datos de la api.
// Y por ultimo el presenter se encargará de conectar el client y la vista.

// Volvamos al ejercicio.

// Vamos a crear un clase presenter que va ha aceptar por el constructor las clases view y client.

// La clase presenter tendrá un metodo Execute.
// Este metodo tomará la clase client, usará el metodo de la instancia de client,
// FindStarWarsPeople.

// El metodo de la clase cliente FindStarWarsPeople tomará un funcion como parametro, un callback.
// Una vez se traiga los datos pasará al callback dicha información.

function View (){
    return{
        showPeople,
    }

    function showPeople(){
        
    }
}

function Client (){
    return{
        result,
        findStarWarsPeople,
    }


    function findStarWarsPeople(callback){
        fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            result= data.result;
        }
    }
}

function Presenter (){
    return{
        Client,
        View,
        execute,
    }
    function execute(){
        let client = Client();
        return client.findStarWarsPeople(result);;
    }
}



// El presenter le pasará por parametro al metodo FindStarWarsPeople un callback.
// Dicho callback recibirá la información de los personajes de star wars
// y se los pasará a un metodo de la vista(view), showPeople.
// El metodo showPeople cogerá la informacion y la pintará en el html.
// Mostrando, name, birth_year, eye_color, height

// aqui tienes un ejemplo del lo que te devolverá la api

// foto

// Basicamente esta arquitectura ayuda a separar la persistencia  "el cliente" de "la vista" y conecta ambos por medio de un presenter
// el html que uses para el ejercicio, puede ser sin estilos. Y solo con los texto en una caja

// repasar tema apis 

// practicamente esta arquitectura la puedes usar para cualquier front que hagas y no quieras utilizar frameworks.

// Para componente con comportamiento en el html, lo puedes gestionar con una vista y un presenter. Cuando necesites tratar con informacion que persista, ya sea una api o un archivo, puedes usar un cliente o modelo para esta funcion.



// Consejos: empieza por la clase client, y has pruebas para ver si funciona la llamada a la api.Tras lo cual programa la vista pasandole datos falsos. Y por ultimo los conectes a traves del presenter