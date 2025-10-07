// Ejemplo del uso de Promesas para manejar tareas asincrónicas en JavaScript.
const promesa = new Promise((resolve, reject) => {
    const exito = true;

    if (exito) {
        resolve('La promesa se resolvió correctamente');
    } else {
        reject('La promesa falló');
    }
});

promesa
    .then((mensaje) => {
        console.log('Éxito:', mensaje);
    })
    .catch((error) => {
        console.log('Error:', error);
    });

const promesaTiempo = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Se completó después de 2 segundos');
    }, 2000);
});

promesaTiempo.then((mensaje) => console.log(mensaje));
