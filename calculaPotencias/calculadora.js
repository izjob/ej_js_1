function calcularPotencia() {
    
    var base = parseFloat(document.getElementById('base').value);
    var exponente = parseFloat(document.getElementById('exponente').value);
    
    
    if (isNaN(base) || isNaN(exponente)) {
      alert('introduce NUMEROS!!!');
      return;
    }
    
    var resultado = Math.pow(base, exponente);
    

    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
  }