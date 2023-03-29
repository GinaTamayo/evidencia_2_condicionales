let num = parseFloat(prompt("Por favor ingrese el primer numero"));
switch (!num%2 == 0) {
    case (true):
        console.log(num , "es un numero impar");
        break;

    default:
        console.log(num , "es un numero par")
        break;
}