// Tenemos un arreglo con números
const numeros = [1, 2, 3];

// Usamos el "spread operator" (...) para copiar los números y agregar más
const copiaNumeros = [...numeros, 4, 5];
console.log(copiaNumeros); // Imprime [1, 2, 3, 4, 5]

// Función que suma cualquier cantidad de números usando "rest operator" (...)
function sumar(...args) {
    // reduce suma todos los números que llegan en args
    return args.reduce((acum, n) => acum + n, 0);
}

console.log(sumar(1, 2, 3, 4)); // Imprime 10

// Creamos un objeto persona
const persona = { nombre: 'Peter', edad: 18 };

// Usamos spread operator para copiar el objeto y agregar una nueva propiedad
const copiaPersona = { ...persona, alias: 'Spiderman' };
console.log(copiaPersona); // Imprime { nombre: 'Peter', edad: 18, alias: 'Spiderman' }