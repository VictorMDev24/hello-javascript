/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades


let ubicacion = {
    pais: "Colombia",
    ciudad: "Bogota",
    clima: "Frio"
}

// 2. Accede y muestra su valor


console.log(ubicacion.pais)

// 3. Agrega una nueva propiedad

ubicacion.region = "Montañosa"

// 4. Elimina una de las 3 primeras propiedades

delete ubicacion.clima

// 5. Agrega una función e invócala

let ubicacion2 = {
    pais: "Colombia",
    ciudad: "Bogota",
    clima: "Frio",
    diaro: function() {
        console.log(`esta es mi ${this.pais} y la capital es ${this.ciudad} y es le clima es ${this.clima}`)
    }
}
ubicacion2.diaro()
// 6. Itera las propiedades del objeto

ubicacion2.ciudad = "Caliente"
console.log(ubicacion2.ciudad)

// 7. Crea un objeto anidado

ubicacion2.user = {
    name: "victor",
    age: 24,
    heSpeaks: "english and spanish"
}
console.log(ubicacion2)
// 8. Accede y muestra el valor de las propiedades anidadas

console.log(ubicacion2.user.name)
console.log(ubicacion2.user.age)
console.log(ubicacion2.user.heSpeaks)

// 9. Comprueba si los dos objetos creados son iguales

console.log(ubicacion == ubicacion2)

// 10. Comprueba si dos propiedades diferentes son iguales


console.log(ubicacion.pais == ubicacion2.name)