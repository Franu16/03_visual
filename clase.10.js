
const persona = {
    nombre: 'Bruce',
    apellido: 'Wayne',
    edad: 35,
    nombreCompleto() {
        return '${this.nombre} ${this.apellido}';
    },
    esMayor() {
        return this.edad >= 18;
    }
};

console.log(persona.nombreCompleto()); // Bruce Wayne
console.log(persona.esMayor());        // true

persona.saludar = function() {
    console.log('Hola, soy ${this.nombre}');
};

persona.saludar(); // Hola, soy Bruce