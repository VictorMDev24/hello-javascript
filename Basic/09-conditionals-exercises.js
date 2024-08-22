/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "victor"

if (nombre == "victor" ) {
    console.log("ese es mi nombre")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

const userName = "victor77"
const password = 123456

if (userName == "victor77"  && password == 123456) {
    console.log("iniciar secion")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -10

if (number >= 1) {
    console.log("numero positivo")
}else if (number == 0) {
    console.log("es cero")
} else  {
    console.log("es negativo")
}



// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let persona = 15

if (persona >= 18) {
    console.log("puede votar")
} else if (persona <= 18){
    console.log("no puede votar")
    let añosFaltantes = 18 - persona
    console.log("no puedes votar t e faltan " + añosFaltantes + "años para votar" )
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7 