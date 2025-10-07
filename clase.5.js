// Tenemos un arreglo con números del 1 al 5
const numeros = [1, 2, 3, 4, 5];

// map sirve para "transformar" cada elemento del arreglo
// En este caso, multiplicamos cada número por 2
const dobles = numeros.map(n => n * 2);
console.log('Dobles:', dobles); // Imprime [2, 4, 6, 8, 10]

// filter sirve para "filtrar" elementos que cumplan una condición
// Aquí queremos los números que sean mayores que 2
const mayoresQueDos = numeros.filter(n => n > 2);
console.log('Mayores que 2:', mayoresQueDos); // Imprime [3, 4, 5]

// reduce sirve para "acumular" un resultado a partir del arreglo
// Aquí sumamos todos los números empezando desde 0
const suma = numeros.reduce((acum, n) => acum + n, 0);
console.log('Suma:', suma); // Imprime 15