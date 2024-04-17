/* Escribe un código que tome un array de números y devuelva un nuevo array con solo
los números mayores que 5, luego imprime el nuevo array en la consola. */


let numeros = [3,6,8,7,23,43,1,9,100,234,0,2,4,230,251,230]
let numerosmayora5 = []

function validacion(numeros,numerosmayora5){
    
    
    for (let index = 0; index < numeros.length; index++) {
    
        if(numeros[index]>5){
            numerosmayora5.push(numeros[index])
        }
    } 
    console.log(`los numeros mayores a 5 son ${numerosmayora5}`)
}

validacion(numeros,numerosmayora5)




