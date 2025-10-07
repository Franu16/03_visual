
// Esta función sirve para "esperar" cierta cantidad de milisegundos
// Devuelve una promesa que se resuelve después del tiempo que le pases
function esperar(ms) {
    return new Promise((resolve) => {
        // setTimeout espera "ms" milisegundos y luego ejecuta lo que está dentro
        setTimeout(() => {
            resolve('Esperé ${ms} milisegundos'); // Cuando termina el tiempo, la promesa se cumple y manda un mensaje
        }, ms);
    });
}

// Esta función se ejecuta de manera "asíncrona", eso significa que puede esperar a que algo termine antes de seguir
async function ejecutar() {
    console.log('Inicio'); // Imprime "Inicio" en la consola
    const mensaje1 = await esperar(1000); // Llama a la función esperar y espera 1 segundo antes de continuar
    console.log(mensaje1); // Imprime el mensaje que devuelve la promesa
    const mensaje2 = await esperar(2000); // Llama otra vez a esperar y ahora espera 2 segundos
    console.log(mensaje2); // Imprime el segundo mensaje
    console.log('Fin'); // Imprime "Fin" cuando todo terminó
}

// Llamamos a la función ejecutar para que corra todo el código
ejecutar();


