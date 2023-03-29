let figura = prompt("ingrese figura");
let base = parseFloat(prompt("Ingrese base"))
let altura = parseFloat(prompt("Ingrese altura"))

switch (figura) {
  case "triangulo":
    let areaTriangulo = base*altura/2
    console.log("Area triangulo es :", areaTriangulo);
    break;
  case "rectangulo":
    let areaRectangulo = base*altura
    console.log("Area rectangulo es :", areaRectangulo);
    break;
  default:
    console.log("Ingrese un figura valida");
    break;
}