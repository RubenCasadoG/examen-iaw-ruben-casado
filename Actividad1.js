// Escribe un programa para tirar dados. El usuario tendrá que decidir entre dados de 6 caras o de 10 caras, así como cuántos quiere tirar. 
// El programa tendrá que comprobar que la introducción de los datos es correcta y mostrará el resultado de cada uno de los dados en pantalla, 
// así como su suma. Un ejemplo del output por terminal sería este:

// Has tirado 3 dados de 6 caras.
// Los resultados han sido: 3 5 1
// El total es 9

const ej1 = require("prompt-sync")({sigint: true})

let numAleatorio = Math.floor(Math.random()*7);
let numAleatorio1 = Math.floor(Math.random()*7);
let numAleatorio2 = Math.floor(Math.random()*7);

let numAleatorio3 = Math.floor(Math.random()*11);
let numAleatorio4 = Math.floor(Math.random()*11);
let numAleatorio5 = Math.floor(Math.random()*11);

let dado = ej1("[+] ¿Qué dado quieres usar, de 6 o 10? -> ")
let veces = ej1("[+] ¿Lo quieres tirar 1, 2 ó 3 veces? -> ")

if (dado == Number(6)) {
    if (veces == Number(1)) {
        console.log("Has tirado " + veces + " vez y ha salido el " + numAleatorio)
    }else if (veces == Number(2)) {
        console.log("Has tirado " + veces + " vez y ha salido el " + numAleatorio + " " + numAleatorio1)
    }else if (veces == Number(3)) {
        console.log("Has tirado " + veces + " vez y ha salido el " + numAleatorio + " " + numAleatorio1+ " " + numAleatorio2) 
    }
}

if (dado == Number(10)) {
    if (veces == Number(1)) {
        console.log("Has tirado " + veces + " vez y ha salido el " + numAleatorio3)
    }else if (veces == Number(2)) {
        console.log("Has tirado " + veces + " vez y ha salido el " + numAleatorio3 + " " + numAleatorio4)
    }else if (veces == Number(3)) {
        console.log("Has tirado " + veces + " vez y ha salido el " + numAleatorio3 + " " + numAleatorio4 + " " + numAleatorio5) 
    }
}











