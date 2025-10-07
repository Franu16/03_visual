// Creamos una clase Animal, que es como un molde para crear animales
class Animal {
    constructor(nombre) {
        this.nombre = nombre; // Cada animal tendrá un nombre
    }

    // Método que dice que el animal hace un sonido
    hablar() {
        console.log('${this.nombre} hace un sonido');
    }
}

// Creamos la clase Perro que hereda de Animal
class Perro extends Animal {
    // Sobrescribimos el método hablar para que diga que el perro ladra
    hablar() {
        console.log('${this.nombre} ladra');
    }
}

// Creamos la clase Gato que hereda de Animal
class Gato extends Animal {
    // Sobrescribimos el método hablar para que diga que el gato maulla
    hablar() {
        console.log('${this.nombre} maulla');
    }
}

// Creamos un perro y un gato usando las clases
const perro1 = new Perro('Firulais');
const gato1 = new Gato('Michi');

// Llamamos al método hablar de cada uno
perro1.hablar(); // Imprime "Firulais ladra"
gato1.hablar();  // Imprime "Michi maulla"