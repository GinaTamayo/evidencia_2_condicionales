let validar = prompt("Por favor ingrese su contraseña:").includes(" ") && (length >8 && length <=15)
switch (validar) {
    case true:
        console.log("Contraseña aceptada");
        break;

    default:
        console.log("Contraseña no valida");
        
        break;
}

