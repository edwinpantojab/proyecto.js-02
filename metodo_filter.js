
// El método "filter" es otra función de orden superior en JavaScript que se utiliza para filtrar los elementos de un array que cumplan con ciertas condiciones y devolver un nuevo array con los elementos que las cumplen.

// La sintaxis básica del método filter es la siguiente:

// array.filter(callback(currentValue [, index [, array]])[, thisArg])

// Donde:

// "array": El array original que se quiere filtrar.
// "callback": La función que se va a aplicar a cada elemento del array.
// "currentValue": El valor actual del elemento que está siendo procesado.
// "index" (opcional): El índice del elemento que está siendo procesado.
// "array" (opcional): El array original que se está recorriendo.
// "thisArg" (opcional): Valor que se asigna al this dentro de la función.
// La función "callback" debe devolver un valor booleano que indique si el elemento debe ser incluido en el nuevo array o no.

// A continuación, se presentan algunos ejemplos de cómo se puede utilizar el método filter en JavaScript:*/

//Ejemplo 1: Filtrar los números impares de un array

const numeros = [1, 2, 3, 4, 5];

const numerosImpares = numeros.filter(numero => numero % 2 !== 0);

console.log(numerosImpares); // [1, 3, 5]

//Ejemplo 2: Filtrar los objetos de una lista que cumplan ciertas condiciones

const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Pedro', edad: 20 }
];

const personasJovenes = personas.filter(persona => persona.edad < 30);

console.log(personasJovenes); // [{ nombre: 'Juan', edad: 25 }, { nombre: 'Pedro', edad: 20 }]

//Ejemplo 3: Filtrar los elementos de un array que contengan una cadena específica

const frutas = ['manzana', 'banana', 'pera', 'uva'];

const frutasConA = frutas.filter(fruta => fruta.includes('a'));

console.log(frutasConA); // ['manzana', 'banana', 'uva']

// En resumen, el método filter es una herramienta muy útil para filtrar elementos de un array en base a ciertas condiciones, devolviendo un nuevo array con los elementos que cumplen dichas condiciones.

// El método filter() es una función incorporada de JavaScript que se utiliza para filtrar elementos de un array. Esta función devuelve un nuevo array con los elementos que cumplen una determinada condición.

// La sintaxis básica del método filter() es la siguiente:

// array.filter(callback(element[, index[, array]])[, thisArg])

// Donde:

// array: el array sobre el que se va a aplicar el método filter().
// callback: la función de retorno de llamada que se ejecuta para cada elemento del array. Esta función debe devolver un valor booleano true o false.
// element: el elemento actual que se está procesando en el array.
// index (opcional): el índice del elemento actual que se está procesando en el array.
// array (opcional): el array sobre el que se está aplicando el método filter().
// thisArg (opcional): un valor para asignar a this al ejecutar la función de retorno de llamada.
// La función de retorno de llamada (callback) toma uno o más argumentos y devuelve true o false. Si devuelve true, el elemento actual se incluirá en el nuevo array que se devuelve. Si devuelve false, el elemento actual se excluirá del nuevo array.

// Veamos un ejemplo sencillo que utiliza el método filter() para filtrar los números pares de un array de números:

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); // output: [2, 4, 6, 8, 10]

// En este ejemplo, creamos un array de números y utilizamos el método filter() para filtrar los números pares. La función de retorno de llamada (callback) toma un solo argumento (numero) y devuelve true si el número es par (es decir, si numero % 2 === 0). El método filter() devuelve un nuevo array que contiene solo los números pares.
