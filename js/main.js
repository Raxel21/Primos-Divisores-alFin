console.time('EncontrarPrimo')
'use strict';
var numero = Math.abs(100);
var divisores = [];
var primos = [2 ];


for ( var s = 3; s < numero; s += 2) {
  if (numeroPrimo(s)) {
    continue;
  }
  primos.push(s);
}

function numeroPrimo(s) {
  for ( var m = 3; m < s; m+=2) {
    // residuo = 0 = false
    // residuo = 1 = true
    // !residuo = 0 = true
    // !residuo = 1 = false
    var residuo = s % m;    
    if ( !residuo ) {
      return true;
    }
  }
}
console.log(primos);
console.timeEnd('EncontrarPrimo');