// Escribe un programa que reciba cadenas de texto de los usuarios, las sume en una variable, 
// la imprima por pantalla y compruebe cuántos de los caracteres introducidos no eran vocales. Un ejemplo del output podría ser este:
// La suma de tus cadenas es: hola1234adios
// Los caracteres que no son vocales suman: 8

const ej2 = require("prompt-sync")({sigint: true})

let texto = ej2("[+] Introduce un texto --> ")
let cadenaCaracteres = "aeiouAEIOU"
let cadenasTotales = 0

while (texto !== "cancelar") {
    for (let i = 0 ; i < cadenaCaracteres.length; i++) {
         for (let j = 0; j < texto.length; j++) {
            if (texto.charAt(j) !== (cadenaCaracteres.charAt(i))) {
                cadenasTotales = (cadenasTotales + 1) 
            }
        }
    }
    texto = ej2("[+] Introduce un texto --> ")
}
console.log("Las cadenas totales son " + cadenasTotales)