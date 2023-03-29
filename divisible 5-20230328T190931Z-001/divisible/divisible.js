let numero = parseFloat(prompt("Ingrese el numero"));
switch (numero % 5 == 0) {
    case true:
        console.log("El numero es divisible entre 5")
        break;
    default:
        console.log("El numero no es divisible entre 5")
        break;
}