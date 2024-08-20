/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
let a = 10
let b = 20

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a ** b)
console.log(a % b)
a++
console.log(a)
a--
console.log(a)
b++
console.log(b)
b--
console.log(b)
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacion = 5

asignacion += 5
asignacion -= 5
asignacion *= 5
asignacion /= 5
asignacion **= 5
asignacion %= 5

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(5 < 9)
console.log(10 > 2)
console.log(5 <= 9)
console.log(10 !== 30)
console.log(a == a)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 === 9)
console.log(2 != 2)
console.log(5 >= 9)
console.log(10 > 30)
console.log(a < "10")

// 5. Utiliza el operador lógico and

console.log(20 < 50 && 30 == 45 )
console.log(200 > 50 && 300 > 45 )

// 6. Utiliza el operador lógico or

console.log(15 < 60 || 8 < 20)

// 7. Combina ambos operadores lógicos

console.log(20 < 50 && 30 == 45  || 5 < 20)
// 8. Añade alguna negación

console.log(!(20 > 50 && 30 == 45 ))
// 9. Utiliza el operador ternario

const amEating = false 

amEating  ? console.log("comiendo pizza") : console.log("haciendo ejercicio")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log((5 + 2) < 20 || 20 !== 10) 
console.log((100 * 2) > 20 || 8 <= 10) 
console.log((10- 5) >= 20 && 5 ===(20 / 2)) 
console.log((100 * 2) > 20 || 8 <= 10) 

