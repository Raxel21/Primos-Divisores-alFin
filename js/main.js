Waves.init();
var button = document.getElementById('trigger');
// Escuchar el evento click en el boton
button.addEventListener('click', encontrarPrimos);
function encontrarPrimos() {
  'use strict';
  // Obtener el valor del input
  var numero = document.getElementById('numero').value;  
  // Comprobar si lo que se ingresa en el input es una letra o un string vacio
  if ( isNaN(numero) || numero == '' ) {
    alert('Por favor, ingresa un número');
  } else {
    // Textarea que contendra los numeros primos
    var containerPrimos = document.getElementById('numerosPrimos');
    // Span que tendra la suma de los numeros primos encontrados
    var containerSumaPrimos = document.getElementById('sumaPrimos');
    // Convertir el string del input a numero
    numero = parseInt(numero);
    // Obtener el valor absoluto del numero, para evitar errores en los bucles for
    numero = Math.abs(numero);
    // Variables que almacenaran los resultados
    var divisores = [];
    var primos = [2];
    var sumaPrimos = 0;

    for (var s = 3; s <= numero; s += 2) {
      if (numeroPrimo(s)) {
        continue;
      }
      primos.push(s);
    }

    /**     
     * @param {number} s 
     * @returns {boolean}  
     */
    function numeroPrimo(s) {
      for (var m = 3; m < s; m += 2) {
        // residuo = 0 = false
        // residuo = 1 = true
        // !residuo = 0 = true
        // !residuo = 1 = false
        var residuo = s % m;
        if (!residuo) {
          return true;
        }
      }
    }

    // Asignamos los numeros primos al textarea
    containerPrimos.value = primos;
    
    /**
     * @param {number} primo
     * @returns {number} retorna la suma de los numeros primos
     */
    primos.forEach(function (primo) {
      // Sumamos los numeros primos encontrados
      sumaPrimos += primo;
    });

    // Asignamos el valor al span con la suma de los numeros primos
    containerSumaPrimos.innerText = sumaPrimos;
  }

}