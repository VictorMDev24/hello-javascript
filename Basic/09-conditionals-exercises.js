/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
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
let Edad = 17
const mensaje = Edad >= 18 ? "es adulto"  : "no es adulto"
console.log(mensaje)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "Mes"

// 7. Muestra el número de días que tiene un Mes dependiendo de la variable del ejercicio anterior
// let Mes = 5
// let nombreMes 
// let numberDay 
// if (Mes === 1){
//     nombreMes = "enero"
//     numberDay = 31
// } else if (Mes === 2) {
//     nombreMes = "febrero"
//     numberDay = 29
// }else if (Mes === 3) {
//     nombreMes = "marzo"
//     numberDay = 31
// }
// else if (Mes === 4) {
//     nombreMes = "abril"
//     numberDay = 30
// }
// else if (Mes === 5) {
//     nombreMes = "mayo"
//     numberDay = 31
// }
// else if (Mes === 6) {
//     nombreMes = "junio"
//     numberDay = 30
// }
// else if (Mes === 7) {
//     nombreMes = "julio"
//     numberDay = 31
// }
// else if (Mes === 8) {
//     nombreMes = "agosto"
//     numberDay = 31
// }
// else if (Mes === 9) {
//     nombreMes = "septiembre"
//     numberDay = 30
// }
// else if (Mes === 10) {
//     nombreMes = "octubre"
//     numberDay = 31
// }
// else if (Mes === 11) {
//     nombreMes = "noviembre"
//     numberDay = 30
// }
// else if (Mes === 12) {
//     nombreMes = "diciembre"
//     numberDay = 31
// }else {
//     nombreMes ="Mes invalido"
//     numberDay = "dias ivalidos"
// }

// let Mensaje = "estamos en " + nombreMes +"este mes tiene" + numberDay +  "que corresponde a"

// if (Mes >= 3 &&  Mes <= 5){
//     Mensaje += "Primavera."
// }else if (Mes >= 6 && Mes <= 8){
//     Mensaje += "Verano."
// }else if (Mes >= 9 && Mes <= 11){
//     Mensaje += "Otoño."
// }else if (Mes === 1 || Mes === 12){
//     Mensaje += "Invierno."
// }
// else {
//     Mensaje += "mes ivalido"
// }
// console.log(Mensaje)



// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "chino"
let frase 

switch (idioma){
    case "español":
        frase = "Dios te bendiga"
        break
    case "ingles":
        frase = "God bless you"
        break
    case "portugues":
        frase = "Que Deus te abençoe "
        break
    case "frances":
        frase = "Que Dieu te bénisse"
        break
    case "aleman":
        frase = "Gott segne dich."
        break
    case "italiano":
        frase = "Dio ti benedica."
        break    
    case "japones":
        frase = " 神様があなたを祝福します (Kami-sama ga anata o shukufuku shimasu)."
        break    
    case "chino":
        frase = "上帝保佑你 (Shàngdì bǎoyòu nǐ)."
        break    
    default:
        frase = "idioma no agrgado"
}
console.log(frase)
// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7 

let mes = 5 
let daynumber 
let monthname 
let estacion 
switch (mes ){
    case 1:
        daynumber = 31
        monthname ="enero"
        estacion = "invierno"
        break
    case 2:
        daynumber = 28
        monthname ="febrero"
        estacion = "invierno"
        break   
    case 3:
        daynumber = 31
        monthname ="marzo"
        estacion = "primavera"
        break    
    case 4:
        daynumber = 30
        monthname ="abril"
        estacion = "primavera"
        break    
    case 5:
        daynumber = 31
        monthname ="mayo"
        estacion = "primavera"
        break    
    case 6:
        daynumber = 30
        monthname ="junio"
        estacion = "verano"
        break    
    case 7:
        daynumber = 31
        monthname ="julio"
        estacion = "verano"
        break    
    case 8:
        daynumber = 31
        monthname ="agosto"
        estacion = "verano"
        break    
    case 9:
        daynumber = 30
        monthname ="septiembre"
        estacion = "otoño"
        break    
    case 10:
        daynumber = 31
        monthname ="octubre"
        estacion = "otoño"
        break    
    case 11:
        daynumber = 30
        monthname ="noviembre"
        estacion = "otoño"
        break    
    case 12:
        daynumber = 31
        monthname ="diciembre"
        estacion = "invierno"
        break
    default:
        daynumber = 31
        monthname ="mes invalido"
        estacion = "estacion invalida"
        
}   

let notificacion ="Este es el  mes de " + monthname + " que tiene "  + daynumber + " dias " + "y esta en " + estacion

console.log(notificacion)