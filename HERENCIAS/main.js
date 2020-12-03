'use strict';

(() => {

    class Vehicle {

        constructor(color, wheel){
            this.color = color;
            this.wheel = wheel;
        }   

        printAnything(){
            console.log("algogggg");
        }
    }

    class Car extends Vehicle {

        constructor(color, wheel, brand){
            super(color, wheel);
            this.brand = brand;
          //  this.vehicle = new Vehicle(color, wheel);
        }

        description(){
            return `this car is ${this.vehicle.color} and the wheel size is ${this.vehicle.wheel}`;
        }
    }

    class JonayReactComponent{

        constructor(text, id){
            this.id = id;
            this.text = text;
        }

        render(){
            //bad code, just signature
        }

        compile(){
            if(this.id){
                let containerElement = document.getElementById(this.id);
                containerElement.innerHTML = this.text;   
            }
        }
    }

    class Paragraph extends JonayReactComponent {

        constructor(text, id){
            super(text, id);
        }

        render(){
            let bold = new Bold("texto");
            bold.render();
            this.text = `
                ${this.text} 
                ${bold.text}
            `;
        }
    }

    class Bold extends JonayReactComponent {

        constructor(text, id){
            super(text, id);  
        }

        render(){
            this.text = `<b>${this.text}</b>`
        }
    }

    function Main(){
        return {execute};

        function execute(){
            /*
            const car = new Car("red", 25, "Ford");
            car.printAnything();
            const description = car.description();
            console.log(description);
            */
            let component =  new Paragraph(
                "Erase una vez el dia en que Natalia se hizo profesora",
                "container");
            component.render();
            component.compile();


            // EJEMPLO DELEGACION DE METODOS
            // let object = {};
            // object.compile = component.compile;
            // console.log(object);
            // object.compile();

        }
    }
    new Main().execute();

})();