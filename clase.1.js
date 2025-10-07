
// En este ejercicio se crean dos clases: Persona y Heroe.
// Se usa la herencia para que Heroe extienda las propiedades de Persona.
// Cada clase tiene sus propios métodos para mostrar información.

// Clase base Persona con nombre y edad
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para mostrar un saludo
    saludar() {
        console.log('Hola, soy ${this.nombre} y tengo ${this.edad} años');
    }
}

// Se crea una persona
const persona1 = new Persona('Tony', 45);
persona1.saludar();

// Clase Heroe que hereda de Persona y agrega la propiedad "poder"
class Heroe extends Persona {
    constructor(nombre, edad, poder) {
        super(nombre, edad); // Llama al constructor de Persona
        this.poder = poder;
    }

    // Método propio de Heroe
    mostrarPoder() {
        console.log("${this.nombre}, tiene el poder de ${this.poder}");
    }
}

// Se crea un héroe
const heroe1 = new Heroe('Peter', 18, 'Trepar muros');
heroe1.saludar();
heroe1.mostrarPoder();