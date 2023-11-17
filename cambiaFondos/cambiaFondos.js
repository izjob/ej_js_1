function colorizar(color){

    
    if (document.getElementById('selFondo').checked) {
        document.body.style.backgroundColor=color;
    }
    else{
        document.getElementById('cuadro').style.backgroundColor=color;
    }
    
}