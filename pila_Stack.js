/*
! En JavaScript, una pila o stack es una estructura de datos que se utiliza para almacenar y administrar datos en una forma de "último en entrar, primero en salir" (LIFO, por sus siglas en inglés). En otras palabras, el último elemento que se agregó a la pila es el primero en ser eliminado.

* La pila en JavaScript se puede implementar utilizando un array (matriz) en el que los elementos se agregan al final de la matriz y se eliminan del mismo lugar. La pila también puede ser implementada utilizando una lista enlazada.

? Para agregar un elemento a la pila en JavaScript, se utiliza el método push() en el array. Este método agrega un elemento al final del array y devuelve la longitud actual del array:

let stack = [];*/

stack.push(1); // Agrega el valor 1 a la pila
stack.push(2); // Agrega el valor 2 a la pila

//Para eliminar el último elemento agregado a la pila, se utiliza el método pop(). Este método elimina el último elemento del array y lo devuelve:

//let stack = [1, 2];
let ultimoElemento = stack.pop(); // elimina el valor 2 de la pila y lo devuelve

//Es importante tener en cuenta que si intentamos usar el método pop() en una pila vacía, se producirá un error. Por lo tanto, siempre debemos verificar primero si la pila está vacía antes de intentar eliminar un elemento:

let stack = [];
if (stack.length === 0) {
  console.log("La pila está vacía");
} else {
  let ultimoElemento = stack.pop(); // eliminará el último elemento de la pila
}
/*
* * En resumen, una pila o stack en JavaScript es una estructura de datos que se utiliza para almacenar y administrar elementos en una forma de LIFO. Se puede implementar utilizando un array o una lista enlazada, y se pueden agregar elementos a la pila utilizando el método push() y eliminar elementos de la pila utilizando el método pop().

* En JavaScript, se puede implementar una pila utilizando varios métodos, como se describe a continuación:

* Arrays: en JavaScript, los arrays son una estructura de datos muy útil que se pueden utilizar para implementar una pila. Para crear una pila utilizando un array, se puede utilizar la función push() para agregar elementos a la pila y la función pop() para eliminar el último elemento agregado a la pila.

* Por ejemplo, para crear una pila vacía, se puede utilizar el siguiente código:
*/
//const pila = [];

//ara agregar elementos a la pila, se puede utilizar la función push() de la siguiente manera:

pila.push("elemento1");
pila.push("elemento2");
pila.push("elemento3");

//Para eliminar elementos de la pila, se puede utilizar la función pop() de la siguiente manera:

const elementoEliminado = pila.pop();
console.log(elementoEliminado); // Imprime "elemento3"

// Linked List: una lista enlazada también se puede utilizar para implementar una pila. En este caso, la pila se crea como una lista enlazada donde cada nodo tiene un puntero al siguiente nodo. La inserción de un elemento en la pila se realiza agregando un nuevo nodo al principio de la lista y la eliminación se realiza eliminando el primer nodo de la lista.
// Por ejemplo, para crear una pila vacía utilizando una lista enlazada, se puede utilizar el siguiente código:

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Pila {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    const nodeToRemove = this.top;
    this.top = nodeToRemove.next;
    return nodeToRemove.data;
  }
}

const pila = new Pila();

// 
// En JavaScript, se puede crear una pila mediante una función constructora que tenga propiedades y métodos específicos para manipular una pila. Aquí hay un ejemplo de cómo se puede implementar una función constructora para crear una pila:

function Stack() {
  this.stack = [];  // El array que almacenará los elementos de la pila
  
  // Método para agregar un elemento a la pila
  this.push = function(element) {
    this.stack.push(element);
  }
  
  // Método para eliminar el último elemento agregado a la pila
  this.pop = function() {
    return this.stack.pop();
  }
  
  // Método para obtener el último elemento agregado a la pila sin eliminarlo
  this.peek = function() {
    return this.stack[this.stack.length - 1];
  }
  
  // Método para verificar si la pila está vacía
  this.isEmpty = function() {
    return this.stack.length === 0;
  }
  
  // Método para obtener el tamaño actual de la pila
  this.size = function() {
    return this.stack.length;
  }
}

// En este ejemplo, se define una función constructora llamada Stack que crea una pila con las siguientes propiedades y métodos:

// stack: un array vacío que almacenará los elementos de la pila.
// push(element): un método que agrega un elemento al final de la pila.
// pop(): un método que elimina y devuelve el último elemento agregado a la pila.
// peek(): un método que devuelve el último elemento agregado a la pila sin eliminarlo.
// isEmpty(): un método que devuelve true si la pila está vacía, y false en caso contrario.
// size(): un método que devuelve el tamaño actual de la pila.
// Para crear una nueva pila, se puede utilizar la función constructora de la siguiente manera:

const myStack = new Stack();

// Luego, se pueden utilizar los métodos de la pila para agregar, eliminar y manipular elementos de la misma:

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.peek()); // Devuelve 3
console.log(myStack.pop());  // Devuelve 3
console.log(myStack.size()); // Devuelve 2
console.log(myStack.isEmpty()); // Devuelve false

// En resumen, una función constructora es una manera conveniente de crear una pila con propiedades y métodos específicos en JavaScript.

/* PILAS CON FUNCTION CONSTRUCTOR */

// 1. Se crea una función Pila() que inicializa el puntero head en null y la longitud de la pila en 0.

// 2. Se crea una función Nodo() que toma un dato como parámetro y lo asigna al atributo data del nodo, además de inicializar el puntero next en null.

// 3. Se agrega al prototipo de Pila un método push() que toma un dato como parámetro, crea un nuevo nodo con dicho dato y lo asigna como head de la pila, además de incrementar su longitud en 1.

// 4. Se agrega al prototipo de Pila un método pop() que devuelve el valor del head si este no es nulo, asignando el siguiente nodo como head y decrementando la longitud en 1. 

// 5. Se agrega al prototipo de Pila un método print() que imprime los datos del nodos desde el head hasta el último nodos si este no es nulo. 

// 6. Se crea la función switchArray() que toma un arreglo como parámetro, creando un objeto pila vacías y llenándola con los elementos del arreglo mediante push(). 
 
// 7. Se devuelve otra función anónima vaciar(), que recibe la pila creadas anteriormente y el arreglo vacíos com parámetros, siendo estos los mismos para cada ejecución de la función anidada; está función anidada se encargará de sacar los elementos de la pilas mediante pop(), guardandolos en el arreglo vacíos hasta que no queden elementos en la pilas (cuando su punter head sea nulo).

function Pila() {
  this.head = null;
  this.len = 0;
}

function Nodo(data) {
  this.data = data;
  this.next = null;
}

Pila.prototype.push = function(data) {
  var newNodo = new Nodo(data);
  newNodo.next = this.head;
  this.head = newNodo;
  this.len++;
}

Pila.prototype.pop = function() {
  if (this.head == null) return null;
  var popNodo = this.head;
  this.head = popNodo.next;
  this.len--;
  return popNodo;
}

Pila.prototype.print = function() {
  if (this.head == null) return null;
  var pointer = this.head;
  while (pointer != null) {
    console.log(pointer.data);
    pointer = pointer.next;
  }
}

// INVERTIR ARRAYS CON PILAS //

function switchArray(arr) {
  var pila = new Pila();
  while (arr.length > 0) {
    pila.push(arr.shift());
  }
  return function vaciar(pila,array) {
    if (pila.head == null) return array;
    array.push(pila.pop().data);
    return vaciar(pila,array);
  }(pila,arr);
}
