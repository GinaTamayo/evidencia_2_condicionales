let precio = parseFloat(prompt("Ingrese el costo del producto"));
let descuento = parseInt(prompt("Ingrese el descuento del producto"));

switch (descuento) {
  case 10:
    console.log("Descuento: ", precio - precio*0.1);
    break;
  case 20:
    console.log("Descuento: ", precio - precio*0.2);
    break;
  case 30:
    console.log("Descuento: ", precio - precio*0.3);
    break;

  default:
    console.log("Ingrese un descuento válido");
    break;
}