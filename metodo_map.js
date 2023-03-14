
// El método "map" es una función de orden superior en JavaScript que se utiliza para transformar cada elemento de un array aplicando una función a cada uno de ellos, devolviendo un nuevo array con los resultados de cada transformación.

// La sintaxis básica del método map es la siguiente:

// array.map(callback(currentValue [, index [, array]])[, thisArg])

// Donde:

// "array": El array original que se quiere transformar.
// "callback": La función que se va a aplicar a cada elemento del array.
// "currentValue": El valor actual del elemento que está siendo procesado.
// "index" (opcional): El índice del elemento que está siendo procesado.
// "array" (opcional): El array original que se está recorriendo.
// "thisArg" (opcional): Valor que se asigna al this dentro de la función.
// La función "callback" debe devolver el nuevo valor para cada elemento y el método map creará un nuevo array con los resultados de cada ejecución de la función. El array original no se modifica.

// A continuación, se presentan algunos ejemplos de cómo se puede utilizar el método map en JavaScript:

// Ejemplo 1: Transformar un array de números multiplicando cada elemento por 2

const numeros = [1, 2, 3, 4, 5];

const numerosMultiplicados = numeros.map(numero => numero * 2);

console.log(numerosMultiplicados); // [2, 4, 6, 8, 10]

// Ejemplo 2: Transformar un array de objetos a un array de strings

const pers = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Pedro', edad: 20 }
];

const nomb = personas.map(persona => persona.nombre);

console.log(nombres); // ['Juan', 'Ana', 'Pedro']

// Ejemplo 3: Transformar un array de strings a un array de objetos

const nombres = ['Juan', 'Ana', 'Pedro'];

const personas = nombres.map(nombre => ({ nombre, edad: 0 }));

console.log(personas); // [{ nombre: 'Juan', edad: 0 }, { nombre: 'Ana', edad: 0 }, { nombre: 'Pedro', edad: 0 }]

//En resumen, el método map es una herramienta muy útil para transformar un array de datos de una manera rápida y sencilla, sin modificar el array original.
