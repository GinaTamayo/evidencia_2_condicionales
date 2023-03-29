/*
Crear un programa que muestre la multiplicación de dos cantidades. 
Use ciclo while. NO USE LA OPERACIÓN MULTIPLICACIÓN
*/
//factor 1
let num = parseInt(prompt("Ingrese el numero que quiere multiplicar"))
//factor 2
let num2 = parseInt(prompt("Ingrese el numero que quiere multiplicar"))
//acumuladora resultado
let resultado = 0
//contador
let cont = 1
while (cont <= num2) {
    //acumulamos la suma del primer factor
    resultado = resultado + num
    cont++;
}
console.log("el resultado de la multiplicacion es:", resultado);