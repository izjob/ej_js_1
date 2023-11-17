function mensaje(n) {
    if(n==1){
        var nombre = prompt('ingresa tu nombre:');
        var edad = prompt('ingresa tu edad:');
        alert('hola ' + nombre + ' tu edad es ' + edad*365 + ' dias');
    }
    else{
        var nombre = document.getElementById('nombre').value
        var edad = document.getElementById('edad').value
        document.getElementById('resultado').innerHTML= "Hola "+nombre+" tu edad es "+edad*365+" dias"
    }
    
}