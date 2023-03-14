// ¡Por supuesto! La recursión en JavaScript es una técnica mediante la cual una función se llama a sí misma para realizar una tarea específica. En esencia, la recursión es una forma de iteración donde una función se llama a sí misma con un conjunto de argumentos modificados cada vez que se llama, hasta que se cumpla una condición de salida. En términos más simples, la recursión es como un bucle que se repite hasta que se alcanza una condición de salida.

// La recursión en JavaScript puede ser útil para tareas como:

// Procesamiento de estructuras de datos complejas como árboles y grafos
// Cálculo de números factoriales y otras operaciones matemáticas
// Búsqueda de rutas o caminos en un mapa o laberinto
// Veamos un ejemplo simple de una función recursiva que calcula el factorial de un número:

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); // Output: 120

//   En este ejemplo, la función factorial() calcula el factorial de un número n. Si n es igual a 0, se devuelve 1. Si no es 0, se llama a factorial() de nuevo con n - 1 como argumento, y se multiplica el resultado de esa llamada por n. Esto se repite hasta que n es 0, en cuyo caso se devuelve 1 y se detiene la recursión.

// Es importante tener en cuenta que la recursión puede ser una técnica poderosa, pero también puede ser propensa a errores y problemas de rendimiento si no se maneja adecuadamente. Es importante asegurarse de que la condición de salida esté correctamente definida para evitar bucles infinitos, y de que la función no se llame a sí misma demasiadas veces, lo que podría llevar a una sobrecarga de la pila de llamadas.

// por ejemplo, para sumar todos los números de 1 a n, se puede utilizar la recursión de la siguiente manera:


function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  
  //modo de factoriar un numero debe devolver valor de 180 ejemplo:1x2x2x3x3x5 = 180
  var array = [1];//el array debe iniciar en 1 
  var dividendo = 2;//la variable donde se guarda el resultado donde se guadara el dividendo al multiplicar ejemplo 1*2=2-2*2=4-4*3=12-12*3=36-36*5=180 mientras va iterando en cada numero 

  while (num !== 1) { //while revisa si num es diferente a 1
    
    if (num % dividendo === 0) {//num saca el resto del dividendo que sea igual a cero
      num = num / dividendo;//num es un parametro de la funcion por eso no lleva var se ara la opracion 
      array.push(dividendo);
      
    }else{

    dividendo++;
}
  }
  return array;

};
//console.log(factorear(180));//[1, 2, 2, 3, 3, 5]


function sumNumbers(n) {
    if (n === 1) {
      return 1;
    } else {
      return n + sumNumbers(n - 1);
    }
  }
  
  // ejemplo de uso:
  console.log(sumNumbers(5)); // devuelve 15 (1 + 2 + 3 + 4 + 5 = 15)

// En esta función, se comprueba si el número es igual a 1. Si es así, se devuelve 1. De lo contrario, se llama a la función sumNumbers con el argumento n-1 y se agrega el resultado a n. Esto se repite hasta que n sea igual a 1.

// Es importante tener en cuenta que las funciones recursivas pueden consumir mucha memoria si se llaman con argumentos grandes, ya que cada llamada a la función se agrega a la pila de llamadas. Por lo tanto, es importante tener en cuenta la complejidad del algoritmo al utilizar la recursión.


// Este código de JavaScript define una función llamada nFactorial que calcula el factorial de un número entero n utilizando una técnica de recursión.

// El factorial de un número entero positivo n se define como el producto de todos los números enteros positivos desde 1 hasta n. Por ejemplo, el factorial de 5 es 5 x 4 x 3 x 2 x 1, que es igual a 120.

// La función nFactorial utiliza la recursión para calcular el factorial de n. Primero, se verifica si el valor de n es menor que 2. Si es así, entonces el factorial de n es 1, ya que 0! y 1! son ambos iguales a 1. Si n es mayor o igual a 2, entonces se realiza una llamada recursiva a la función nFactorial con el argumento n - 1. Esto continúa hasta que se alcanza el caso base de n < 2.

// Finalmente, la función devuelve el resultado de n multiplicado por el factorial de n - 1, que se obtiene a través de la llamada recursiva.

// En el código de ejemplo, la función nFactorial se llama dos veces, una vez con el argumento 5 y otra vez con el argumento 15. El resultado de la primera llamada es 120, y el resultado de la segunda llamada es 1307674368000. Ambos resultados son correctos para los respectivos valores de n.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…array
// function nFactorial(n){
//     if(n === 0){//el factorial de 0! = 1 por eso n retorna 1 y desde hay inicia el conteo
//         return 1;//este es el numero que retorna el if 1! = 1=>este es el uno con el que va a iniciar la segunda funsion
//     }else{
//         return n * nFactorial (n-1);
//     }        //n=5 o otro numero que queramos hallar el factorial 
//              //!5 = 1 * 2 * 3 * 4 * 5 = 120   
//              //     1 * 2 = 2 => 2 * 3 = 6 => 6 * 4 = 24 => 24 * 5 = 120     
// }

function nFactorial (n){
  //CASO BASE 
  if(n < 2)return 1;//el < 2 puede ser 0,1 o 2 es lo mismo 
  //LLAMADA RECURSIVA 
   return n * nFactorial (n - 1);
  }
  console.log(nFactorial(5))//.toBe(120);
  console.log(nFactorial(15))//.toBe(1307674368000);


//   Este código es una implementación recursiva de la secuencia de Fibonacci que devuelve el n-ésimo número de la secuencia. La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos números anteriores, comenzando por 0 y 1.

// La función nFibonacci toma un número entero n como parámetro y devuelve el n-ésimo número en la secuencia de Fibonacci.

// El código comienza con un caso base que verifica si n es menor que 2. Si es así, devuelve n, ya que los primeros dos números en la secuencia de Fibonacci son 0 y 1, por lo que si n es 0 o 1, se devuelve n.

// Si n es mayor o igual a 2, la función se llama recursivamente dos veces: una para n-1 y otra para n-2. Luego, los resultados de estas dos llamadas recursivas se suman y se devuelve el resultado.

// Las dos llamadas recursivas son necesarias para construir la secuencia de Fibonacci de manera recursiva, ya que cada número en la secuencia es la suma de los dos números anteriores.

// El código también contiene dos líneas de código comentadas que son equivalentes al código original, pero utilizan un operador ternario para hacer la implementación un poco más concisa. Estas líneas se pueden descomentar si se desea utilizar la versión alternativa del código.

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function nFibonacci(n) {
  //caso base 
  if (n < 2) return n;
  //llamada recursiva 
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  //return n <= 1 ? n : nFibonacci (n - 1) + nFibonacci (n - 2);
  //return n < 2 ? n : nFibonacci(n - 1) + nFibonacci (n -2);
  
}
console.log(nFibonacci(0));//el numero es el indice del recorrido del array
console.log(nFibonacci(1));
console.log(nFibonacci(2));
console.log(nFibonacci(3));
console.log(nFibonacci(4));
console.log(nFibonacci(5));
console.log(nFibonacci(6));
console.log(nFibonacci(7));
console.log(nFibonacci(8));
console.log(nFibonacci(9));
