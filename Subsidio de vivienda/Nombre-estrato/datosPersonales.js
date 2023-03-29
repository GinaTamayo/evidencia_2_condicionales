let nombre = prompt("Ingrese su nombre");
let estrato = parseInt(prompt("Ingree su estrato socio-economico"));
let tiempo = parseInt(prompt("Ingrese el tiempo (años) que lleva trabajando e la empresa"));
switch (estrato<4 && tiempo>=8) {
        case true: 
        console.log("Feliciddes" , nombre , "cumple con los requisitos para recibir subsidio de vivienda")
    break;

    default:
        console.log("Lo entimos" , nombre , "no cumple con los requisitos para recibir subsidio de vivienda")
        break;
}


