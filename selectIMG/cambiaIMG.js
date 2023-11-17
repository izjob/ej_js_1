function cambiarImagen() {
    imagen = document.getElementById('imagen')
    seleccion = document.getElementById('sel').value
    switch (seleccion) {
        case '1':
            imagen.src='./img/github.png'
            break;
            
        case '2':
            imagen.src='./img/java.png'
            break;

        case '3':
            imagen.src='./img/linkedin.png'
            break;

        case '4':
            imagen.src='./img/php.png'
            break;
            default:
                alert(seleccion)
                break;

    }
}