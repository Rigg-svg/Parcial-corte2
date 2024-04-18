/* Escribe un código que tome dos números y determine cuál es el mayor, luego
imprime el resultado en la consola. */


function validacion (num1,num2){

    const input = process.argv;
    let value = input[2]

    if(num1>num2){
        console.log(`el numero 1 es mayor que el 2`)

    }else{
        console.log(`el numero 2 es mayor que el `)
    }
}