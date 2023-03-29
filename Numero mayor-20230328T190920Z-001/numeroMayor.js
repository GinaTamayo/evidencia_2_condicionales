let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
if (num1 == num2) {
    console.log("Ingrese nuevamente los numeros, estos deben ser diferentes");
} else {
    if (num1 > num2) {
        console.log(num1 , "es mayor que" , num2)
    } else {
        console.log(num1 , "es menor que" , num2)
    }
}    