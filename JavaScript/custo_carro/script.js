
  function calcularCusto() {
    var custoFabrica = parseFloat(document.getElementById("custoFabrica").value);
    var percDistribuidor = parseFloat(document.getElementById("percDistribuidor").value);
    var percImpostos = parseFloat(document.getElementById("percImpostos").value);
    
    var valorFinal = custoFabrica + (custoFabrica * (percDistribuidor / 100)) + (custoFabrica * (percImpostos / 100));
    
    document.getElementById("valorfinal").value = valorFinal.toFixed(2);
  }

