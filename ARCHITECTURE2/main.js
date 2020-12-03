'use strict';

/* 1. Crea 3 clases View, Client y Presenter.

- Client tendrá un método findStarWarsPeople q hará la peticion a la API: https://swapi.dev/api/people y pasará un callback por parametro.

- View tendrá un método showPeople q cogerá la info y la pintará en el html: name, birth_year, eye_color, height.

- Presenter tendrá por parametro las clases view y client y un método execute q tomará la clase client y usará su método,findStarWarsPeople q pasará por parametro un callback q recibirá solo la info de los personajes de la API q mostrará y se los pasará al método de view, showPeople.

Consejos: Empieza por la clase client, luego programa la vista y por último conéctalos a través del presenter */

(() => {
	function Client() {
		return {findStarWarsPeople};
		function findStarWarsPeople(callback) {
            fetch('https://swapi.dev/api/people')
            .then(response => response.json())
            .then(data => {
				callback(data.results);
			});
		}
	}

	function View() {
		return {showPeople};
		function showPeople(people) {
			for (const person of people) {
				let HTMLcode = `<ul>
                <li>${person.name}</li>
                <li>${person.birth_year}</li>
                <li>${person.eye_color}</li>
                <li>${person.height}</li></ul>`;
				document.getElementById('people').innerHTML += HTMLcode;
			}
		}
	}

	function Presenter(client, view) {
		return {execute};
		function execute() {
			client.findStarWarsPeople(showPersonFeatures);
		}
		function showPersonFeatures(results) {
			const people = results.map(person => {
				return {
					name: person.name,
					birth_year: person.birth_year,
					eye_color: person.eye_color,
					height: person.height,
				};
            });
			view.showPeople(people);
		}
	}
	function main() {
		let client = Client();
		let view = View();
		let presenter = Presenter(client, view);
		presenter.execute();
	}
	main();
})();
