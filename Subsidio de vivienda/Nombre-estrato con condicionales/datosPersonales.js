let nombre = prompt("Ingrese nombre completo");
let estrato =prompt("Ingrese su estrato socio-economico");
let tiempo = prompt("Ingrese su tiempo (años) trabajando para la empresa");

if (estrato>3) {
    console.log("Lo sentimos" , nombre , "no cumple con los requisitos para recibir subsidio de vivienda");
} else {
    if (tiempo>=8) {
        console.log("Felicidades" , nombre , "cumple con los requisitos para recibir subsidio de vivienda");
        } else {
            console.log("Lo sentimos" , nombre , "no cumple con los requisitos para recibir subsidio de vivienda");
        }
}
