// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  var resultado = 0;
  for (var i = 0; i < 11; i++) {
    resultado += i;
  }
  return (resultado);
}

function encuentraPares(array) {
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
/*  let pares = [];
  for(let i= 1;i<array.length;i++){
    if(array[i] % 2 ==0){
      pares.push(i);
       return pares*/
       var array_par =array.filter(function(numero){
        return numero % 2  == 0
      });
      return array_par;
}
 
  

function elevaAlCuadrado(array) {
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i]
  }
  return array;
}

function sumaArray(array) {
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var sumaArray = array.reduce(function (acumulador, elemento) {
    return acumulador + elemento
  }, 0);
  return sumaArray;
}

function numeroDigitos(num) {
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  if (num < 10) {
    var digit = 1
    return digit;
  } else if (num < 100) {
    digit = 2
    return digit;
  } else if (num < 1000) {
    digit = 3
    return digit;
  } else if (num < 10000)
    digit = 4
  return digit;
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  imprimirSumaNumeros,
  encuentraPares,
  elevaAlCuadrado,
  sumaArray,
  numeroDigitos
}
