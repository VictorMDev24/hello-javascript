/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales
// let animales = []
// animales[0] ="perro"
// animales[1] ="gato"
// animales[2] ="araña"
// animales[3] ="pez"
// animales[4] ="aguila"

let animales = ["perro", "gato", "araña", "pez", "aguila"]

// 2. Añade dos más. Uno al principio y otro al final

animales.unshift("tortuga")
animales.push("caballo")

console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(3,1)
console.log(animales)
// 4. Crea un set que almacene cinco libros

let libros = new Set()
libros = new Set(["libro1","libro2","libro3","libro4","libro5"])
console.log(libros)
// 5. Añade dos más. Uno de ellos repetido

libros.add("libro6", "LIbro1")
console.log(libros)

// 6. Elimina uno concreto a tu elección

libros.delete("LIbro1")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map()
meses = new Map( [
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"],
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(meses.get(5))
console.log(meses.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("verano", ["junio", "julio", "agosto"])

console.log(meses.get("verano"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let lista = [1 , 2 , 3]
lista = new Set(lista)
console.log(lista)

meses.set("nueva llave" ,lista)


console.log(meses)