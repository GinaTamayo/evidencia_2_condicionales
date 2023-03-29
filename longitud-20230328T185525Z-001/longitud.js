let lon = parseInt(prompt("Ingrese longitud en kilometros"));
let lon2 = parseInt(prompt("Ingrese longitud:1) hectometro 2) decametro 3) metro"))
switch (lon2) {
    case 1:
        console.log("La longitud ingresada en hectometros es: " , lon*10);
        break;
        case 2: 
        console.log("La longitud ingresada en decametrtos es :" , lon*100) 
        break;
        case 3:
        console.log("La longitud ingresada en metros es: " , lon*1000)
        break;

    default:
        break;
}
