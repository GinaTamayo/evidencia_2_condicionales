let angulo1 = parseFloat(prompt("Ingrese el primer angulo"));
let angulo2 = parseFloat(prompt("Ingrese el segundo angulo"));
let angulo3 = parseFloat(prompt("Ingrese el tercer angulo"));
switch (angulo1 + angulo2 + angulo3 == 180) {
    case true:
        console.log("Los angulos corresponden a un triangulo")
        break;
    default:
        console.log("Los angulos no corresponden a un triangulo")
        break;
}