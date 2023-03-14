
// JavaScript tiene muchos métodos de arrays integrados que permiten realizar una variedad de operaciones útiles. Aquí hay algunos de los más comunes:

//=> push(): Agrega uno o más elementos al final del array.

var array = [1, 2, 3];
array.push(4, 5);
console.log(array); // [1, 2, 3, 4, 5];

//=> pop(): Elimina el último elemento del array y lo devuelve.

var array = [1, 2, 3];
var removed = array.pop();
console.log(array); // [1, 2]
console.log(removed); // 3

//=> shift(): Elimina el primer elemento del array y lo devuelve.

const array = [1, 2, 3];
const removed = array.shift();
console.log(array); // [2, 3]
console.log(removed); // 1

//=> unshift(): Agrega uno o más elementos al principio del array.

const array = [1, 2, 3];
array.unshift(0);
console.log(array); // [0, 1, 2, 3]

// => slice(): Devuelve una parte del array, especificada por un índice de inicio y un índice de fin (opcional).

const array = [1, 2, 3, 4, 5];
const sliced = array.slice(1, 4);
console.log(sliced); // [2, 3, 4]

//=> splice(): Agrega o elimina elementos del array en cualquier posición.

const array = [1, 2, 3, 4, 5];
array.splice(2, 1); // elimina el tercer elemento
console.log(array); // [1, 2, 4, 5]

//=> concat(): Combina dos o más arrays en uno nuevo.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // [1, 2, 3, 4, 5, 6]

//=> join(): Convierte los elementos del array en una cadena, separados por un separador.

const array = ['apple', 'banana', 'orange'];
const joined = array.join(', ');
console.log(joined); // "apple, banana, orange"

//=> sort(): Ordena los elementos del array.

const array = [3, 1, 2];
array.sort();
console.log(array); // [1, 2, 3]

//=> filter(): Crea un nuevo array con los elementos que cumplan una condición especificada.

const array = [1, 2, 3, 4, 5];
const filtered = array.filter(num => num > 3);
console.log(filtered); // [4, 5]

//=> reverse(): Invierte el orden de los elementos del array.

const myArr = [1, 2, 3, 4, 5];
myArray.reverse();
console.log(myArray); // [5, 4, 3, 2, 1]

//=> indexOf(): Devuelve la posición de un elemento en el array.

const myArray = [1, 2, 3, 4, 5];
const position = myArray.indexOf(3);
console.log(position); // 2

//=> forEach() - Ejecuta una función en cada elemento del array.

let fruits = ["apple", "banana", "orange"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});

//=> map() - Crea un nuevo array con el resultado de aplicar una función a cada elemento del array original.

let numbers = [1, 2, 3];
let squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(squaredNumbers); // [1, 4, 9]

// En JavaScript, los arrays son objetos que almacenan una colección de elementos, los cuales pueden ser de cualquier tipo de datos, incluyendo otros arrays. Existen varios métodos incorporados en JavaScript que pueden ser utilizados para manipular y trabajar con arrays. Algunos de estos métodos incluyen:

// push(): Añade uno o más elementos al final del array.

// pop(): Elimina el último elemento del array y lo devuelve.

// shift(): Elimina el primer elemento del array y lo devuelve.

// unshift(): Añade uno o más elementos al principio del array.

// concat(): Combina dos o más arrays.

// slice(): Devuelve una porción del array.

// splice(): Añade o elimina elementos de un array.

// indexOf(): Devuelve el índice del primer elemento que coincide con el valor especificado, o -1 si no se encuentra.

// lastIndexOf(): Devuelve el índice del último elemento que coincide con el valor especificado, o -1 si no se encuentra.

// join(): Convierte los elementos del array en una cadena, separados por un separador especificado.

// reverse(): Invierte el orden de los elementos en el array.

// sort(): Ordena los elementos del array en orden alfabético o numérico.

// filter(): Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.

// map(): Crea un nuevo array con los resultados de la función proporcionada aplicada a cada uno de los elementos del array.

// reduce(): Aplica una función a cada uno de los elementos del array, para reducirlo a un solo valor.

// Estos son solo algunos de los métodos incorporados en JavaScript para trabajar con arrays. Cada método tiene su propia funcionalidad y puede ser útil en diferentes situaciones, dependiendo de las necesidades del programador.

// MENOR

function minimo(arr) {
    var aux = arr[0];
    for (var i=1; i<arr.length; i++) {
      if (arr[i]<aux) aux = arr[i];
    }
    console.log('El minimo es: ', aux);
    return aux;
  }
  
  // MAYOR
  
  function mayor(arr) {
    var aux = arr[0];
    for (var i=1; i<arr.length; i++) {
      if (arr[i]>aux) aux = arr[i];
    }
    console.log('El mayor es: ',aux);
    return aux;
  }
  
  // TOTAL
  
  function total(arr) {
    var aux = arr.reduce(function(tot,num){
      return tot+num;
    })
    console.log('El total es: ', aux);
    return aux;
  }
  
  function totalBis(arr) {
    var aux = 0;
    for (var i=0; i<arr.length; i++) {
      aux += arr[i];
    }
    console.log('El total es: ', aux);
    return aux;
  }
  
  // PROMEDIO
  
  function promedio(arr) {
    var len = arr.length,
      aux = arr.reduce(function(tot,num) {
        return tot+num;
      })
    console.log('El promedio es: ',aux/len);
    return aux/len;
  }
  
  function promedioBis(arr) {
    var aux = 0;
    for (var i=0; i<arr.length; i++) {
      aux += arr[i];
    }
    console.log('El promedio es: ',aux/i);
    return aux/i;
  }
  
