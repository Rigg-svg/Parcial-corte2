/* Escribe un código que simula un juego donde el usuario debe adivinar un número
secreto entre 1 y 100. El programa debe generar un número aleatorio y pedir al
usuario que ingrese un número repetidamente hasta que adivine correctamente. El
ciclo while se utiliza para controlar la repetición hasta que el usuario adivine el
número. */
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let encontrado = false

while (encontrado == false){
    let num = parseInt(prompt("Ingrese un numero:"));

    if (num === numeroSecreto){
        alert("¡Has adivinado el numero!")
        encontrado == true
    }
}
