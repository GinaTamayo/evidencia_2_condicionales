let num = parseFloat(prompt("Ingrese el año"));
if (num%4==0 && num%100!=0||num%400==0) {
    console.log(num , "es un año biniestro");
} else {
    console.log(num , "no es un año biniestro");
}