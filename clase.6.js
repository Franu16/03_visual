// Tenemos un arreglo con números, algunos se repiten
const numeros = [1, 2, 3, 3, 4, 4, 5];

// Set es una estructura que guarda valores únicos, no permite duplicados
const setNumeros = new Set(numeros);

console.log(setNumeros); // Imprime {1, 2, 3, 4, 5}, sin los duplicados

// add sirve para agregar un nuevo valor al Set
setNumeros.add(6);
console.log(setNumeros); // Imprime {1, 2, 3, 4, 5, 6}

// delete sirve para eliminar un valor del Set
setNumeros.delete(2);
console.log(setNumeros); // Imprime {1, 3, 4, 5, 6}

// Ahora usamos Map, que guarda pares "clave-valor"
const mapa = new Map();
mapa.set('nombre', 'Peter'); // 'nombre' es la clave, 'Peter' es el valor
mapa.set('edad', 18);        // 'edad' es la clave, 18 es el valor

console.log(mapa);             // Imprime todo el mapa
console.log(mapa.get('nombre')); // get obtiene el valor de una clave, imprime 'Peter'
console.log(mapa.has('edad'));   // has revisa si existe la clave 'edad', imprime true

// delete elimina un par del mapa
mapa.delete('edad');
console.log(mapa);            
 // Imprime solo { 'nombre' => 'Peter' }