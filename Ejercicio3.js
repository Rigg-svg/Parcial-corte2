/* Dado el siguiente objeto: let persona = { nombre: 'Juan', edad: 30,
profesion: 'Ingeniero'} , accede al valor de la propiedad "nombre" e
imprímelo en la consola utilizando la notación de punto y la notación de corchetes. */

let persona = { 
    nombre: 'Juan', 
    edad: 30,
    profesion: 'Ingeniero'
};

/* Notación punto */
console.log(persona.nombre);

/* Notación corchete */
console.log(persona["nombre"]);