let num = parseInt(prompt("Por favor ingrese numero"));
if (num%5==0 && num%3==0) {
    console.log(num , "es divisible entre 3 y 5")
} else {
    console.log("no fue posible dividir" , num , "entre 3 y 5")
}