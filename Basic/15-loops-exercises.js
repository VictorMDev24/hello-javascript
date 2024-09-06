/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios



// 1. Crea un bucle que imprima los números del 1 al 20

let i = 0
while (i <= 20) {
    console.log(i)
    i++
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let a = 1
let suma = 0
while(a <= 100) {
    suma += a 

    a++
   
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let c = 1; c <= 50; c++) {
    if (c % 2 === 0) {
        console.log(`es par ${c}`)
    }
    else if ( c % 2 !== 0) {
        console.log(`es impar ${c}`)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["victor", "manuel", "luis", "javier"]
let n = 0
do {
    console.log(nombres[n])
    n++
}
while (n < nombres.length)

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let frase = "murcielago"
let contador = 0
for (let f = 0; f < frase.length; f++) {
    let vocales = frase[f].toLowerCase() 
if (vocales === "a" || vocales === "e" || vocales === "i" || vocales === "o" || vocales === "u")  {
    contador++
}
}
console.log("numero de vocales ", contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let num = [2,3,4,5,6,7,8,9] 
let producto = 1

for(let g = 0 ; g < num.length;g++) {
    producto = producto * num[g]
} 
console.log("el resultado es" + producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for(let m = 0; m < 10 ; m++){
    let a = 5
    let resultado = a * (m + 1)
    console.log(`${a} X ${m + 1} es igual a ${resultado}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let invert = "hola, usuario"
let box = ""
for(let d = invert.length - 1; d >= 0; d--) {
    box += invert[d]
}
console.log(invert.length)
console.log( box)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibo = [0,1,1,2,3,5,8,13,21,34]
let box2 = []


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
for(let w = 0; w <= fibo.length - 1; w++){
    console.log(fibo[w])
    if (fibo[w] > 10) {
        box2.push(fibo[w])
    }
}
console.log(box2)
