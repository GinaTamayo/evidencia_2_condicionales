let numero = parseFloat(prompt("Ingrese el numero"));
switch (numero % 2 == 0) {
    case true:
        console.log(numero , "es par")
        break;
        
  default:
        console.log(numero , " es impar")
        break;
}