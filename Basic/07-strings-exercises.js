/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto

let userName = "Victor"
let age = 24
let Developer = "fullstack" + userName + age 
console.log(Developer)

// 2. Muestra la longitud de una cadena de texto

console.log(Developer.length)

// 3. Muestra el primer y último carácter de un string

console.log(Developer[0])
console.log(Developer[16])

// 4. Convierte a mayúsculas y minúsculas un string

let lowCase = "texto mayuculas"
let uperCase = "TEXTO MINUSCULAS"
console.log(lowCase.toUpperCase())
console.log(uperCase.toLowerCase())
// 5. Crea una cadena de texto en varias líneas

let Cadena = `cadena
de 
texto 
de
varias lineas`

// 6. Interpola el valor de una variable en un string

let email = "corredeprueba@gmail.com"
console.log(`hola yo soy ${userName} y tengo ${age}  y este es mi correo ${email}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let texto = "Este es un ejemplo de texto con espacios en blanco"
console.log(texto.replaceAll(" ", "_"))


// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(texto.includes("ejemplo"))

// 9. Comprueba si dos strings son iguales

console.log(age === userName)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(texto.length)
console.log(email.length)