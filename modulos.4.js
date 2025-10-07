// Ejemplo de exportación de funciones usando módulos en JavaScript.
export const nombre = 'Tony Stark';
export const edad = 45;

export function saludar(persona) {
    console.log('Hola, ${persona}');
}

// Ejemplo importación:
// import { nombre, edad, saludar } from './modulos.js';
// console.log(nombre, edad);
// saludar('Peter Parker');
