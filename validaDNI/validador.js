function validarDNI(){
    var numeros = document.getElementById("numeros").value
    if (numeros%23<22 && numeros%23>0) {
        numLetra=numeros%23
        codigoLetras="TRWAGMYFPDXBNJZSQVHLCKE"
        letra = document.getElementById("letra").value

        if (letra == codigoLetras[numLetra]) {
            document.getElementById("resultado").innerHTML="Resultado: es valido!"
        }
        else{
            document.getElementById("resultado").innerHTML="Resultado: no es valido!"
        }
        
    }
    else{
        alert(numeros)
        document.getElementById("resultado").innerHTML="Resultado: no es valido!"
    }

    
}