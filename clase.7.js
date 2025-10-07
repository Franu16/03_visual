// Creamos un objeto que representa un Avenger
const avenger = {
    nombre: 'Tony',     // Nombre real
    alias: 'Iron Man',  // Nombre de superhéroe
    poder: 'Inteligencia' // Su poder especial
};

// Función que recibe un objeto y "desestructura" sus propiedades
function imprimirAvenger({ nombre, alias, poder }) {
    console.log('Nombre: ${nombre}'); // Imprime el nombre
    console.log('Alias: ${alias}');   // Imprime el alias
    console.log('Poder: ${poder}');   // Imprime el poder
}

// Llamamos a la función pasando el objeto avenger
imprimirAvenger(avenger);

// Creamos un arreglo con nombres de héroes
const heroes = ['Thor', 'Iron Man', 'Hulk'];

// Función que recibe un arreglo y desestructura sus elementos por posición
function imprimirHeroes([primero, segundo, tercero]) {
    console.log(primero, segundo, tercero); // Imprime los tres héroes en orden
}

// Llamamos a la función pasando el arreglo de héroes
imprimirHeroes(heroes);