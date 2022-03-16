function ConverterDolar() {
    const real = parseFloat(document.getElementById("valor").value);
    const valorConvertido = real / 5.05;
    document.getElementById("valorConvertido").innerHTML =
      real + " reais em dólares são = U$" + valorConvertido.toFixed(2);
  }
  
  function ConverterEuro() {
    const euro = parseFloat(document.getElementById("valor").value);
    const valorConvertido = euro / 5.52;
    document.getElementById("valorConvertido").innerHTML =
      euro + " reais em euros são = €" + valorConvertido.toFixed(2);
  }
  
  function ConverterLibra() {
    const libra = parseFloat(document.getElementById("valor").value);
    const valorConvertido = libra / 6.63;
    document.getElementById("valorConvertido").innerHTML =
      libra + " reais em libras são = £" + valorConvertido.toFixed(2);
  }
  
