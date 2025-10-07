// Creamos un objeto Date con la fecha y hora actual
const fechaActual = new Date();

console.log(fechaActual); // Imprime toda la fecha y hora actual
console.log('Año:', fechaActual.getFullYear()); // Obtiene el año (por ejemplo 2025)
console.log('Mes:', fechaActual.getMonth() + 1); // Obtiene el mes (0 = enero, por eso sumamos 1)
console.log('Día:', fechaActual.getDate()); // Obtiene el día del mes
console.log('Hora:', fechaActual.getHours()); // Obtiene la hora en formato 24h
console.log('Minutos:', fechaActual.getMinutes()); // Obtiene los minutos
console.log('Segundos:', fechaActual.getSeconds()); // Obtiene los segundos

// Creamos un objeto Date para una fecha específica: Navidad 25 de diciembre de 2025
const navidad = new Date(2025, 11, 25); // Mes 11 = diciembre (empieza desde 0)
console.log(navidad); // Imprime la fecha de Navidad