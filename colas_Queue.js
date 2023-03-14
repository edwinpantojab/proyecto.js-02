// Una Queue (cola) es una estructura de datos que funciona con el principio FIFO (First-In-First-Out), lo que significa que el primer elemento que se inserta en la cola es el primero en salir. En JavaScript, podemos implementar una cola utilizando un array.

// A continuación, se presenta un ejemplo de implementación de una Queue en JavaScript:

class Queue {
    constructor() {
      this.items = [];
    }

    // enqueue(element): agrega un elemento al final de la cola.
    enqueue(element) {
      this.items.push(element);
    }
  
    // dequeue(): elimina el primer elemento de la cola y lo devuelve. Si la cola está vacía, devuelve "Underflow".
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }

    // front(): devuelve el primer elemento de la cola. Si la cola está vacía, devuelve "No elements in Queue".
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
     
    // isEmpty(): devuelve true si la cola está vacía, de lo contrario, devuelve false.
    isEmpty() {
      return this.items.length == 0;
    }
    
    // printQueue(): devuelve una cadena con todos los elementos de la cola.
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }

//   En este ejemplo, la clase Queue tiene los siguientes métodos:

// enqueue(element): agrega un elemento al final de la cola.
// dequeue(): elimina el primer elemento de la cola y lo devuelve. Si la cola está vacía, devuelve "Underflow".
// front(): devuelve el primer elemento de la cola. Si la cola está vacía, devuelve "No elements in Queue".
// isEmpty(): devuelve true si la cola está vacía, de lo contrario, devuelve false.
// printQueue(): devuelve una cadena con todos los elementos de la cola.
// A continuación, se presentan algunos ejemplos de cómo usar la Queue:

// creando una nueva cola
//let queue = new Queue();

// agregando elementos a la cola
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

// imprimiendo la cola
console.log(queue.printQueue()); // 10 20 30 40

// eliminando un elemento de la cola
queue.dequeue();
console.log(queue.printQueue()); // 20 30 40

// obteniendo el primer elemento de la cola
console.log(queue.front()); // 20

// verificando si la cola está vacía
console.log(queue.isEmpty()); // false

// En resumen, la Queue es una estructura de datos útil para almacenar elementos en un orden específico y recuperarlos en el mismo orden. En JavaScript, podemos implementar una Queue utilizando un array y algunos métodos para realizar operaciones básicas como agregar y eliminar elementos, y verificar si la cola está vacía.

// function queue en JavaScript es una estructura de datos que sigue el principio FIFO (First In, First Out), similar a una cola que se puede utilizar para almacenar una lista de elementos en orden secuencial. Se puede implementar usando un array o una lista enlazada.

// Aquí hay un ejemplo de cómo implementar una function queue utilizando un array en JavaScript:

function Queue() {
    this.items = [];

// enqueue(element): Este método añade un elemento al final de la cola.  
    this.enqueue = function(element) {
      this.items.push(element);
    }

// dequeue(): Este método elimina y devuelve el primer elemento de la cola. Si la cola está vacía, devuelve el mensaje "Queue is empty". 
    this.dequeue = function() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }

// front(): Este método devuelve el primer elemento de la cola sin eliminarlo. Si la cola está vacía, devuelve el mensaje "Queue is empty".
    this.front = function() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }

// isEmpty(): Este método comprueba si la cola está vacía o no. Devuelve true si la cola está vacía, false en caso contrario.  
    this.isEmpty = function() {
      return this.items.length === 0;
    }

// printQueue(): Este método devuelve una cadena que representa los elementos de la cola.
    this.printQueue = function() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  // Crear una instancia de Queue
  //let queue = new Queue();
  
  // Añadir elementos a la cola
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  // Imprimir la cola
  console.log(queue.printQueue()); // 10 20 30
  
  // Eliminar un elemento de la cola
  queue.dequeue();
  
  // Imprimir la cola actualizada
  console.log(queue.printQueue()); // 20 30
  
  // Obtener el primer elemento de la cola
  console.log(queue.front()); // 20
  
  // Comprobar si la cola está vacía
  console.log(queue.isEmpty()); // false

// En este ejemplo, se ha creado una función Queue que define varios métodos para manipular la cola. Los métodos son:

// enqueue(element): Este método añade un elemento al final de la cola.

// dequeue(): Este método elimina y devuelve el primer elemento de la cola. Si la cola está vacía, devuelve el mensaje "Queue is empty".

// front(): Este método devuelve el primer elemento de la cola sin eliminarlo. Si la cola está vacía, devuelve el mensaje "Queue is empty".

// isEmpty(): Este método comprueba si la cola está vacía o no. Devuelve true si la cola está vacía, false en caso contrario.

// printQueue(): Este método devuelve una cadena que representa los elementos de la cola.

// En resumen, una function queue en JavaScript es una estructura de datos útil para almacenar una lista de elementos en orden secuencial, lo que permite añadir y eliminar elementos siguiendo el principio FIFO. Se puede implementar utilizando un array o una lista enlazada, y se pueden añadir y eliminar elementos utilizando métodos específicos como enqueue() y dequeue().


// Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
//   - enqueue: agrega un valor respetando el orden.
//   - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
//   - size: retorna el tamaño (cantidad de elementos) de la queue.

// Pueden utilizar class o función constructora.

//uso de clases en vez de la function Queue y funsiona exactamente igual 
// class Queue {
//   constructor(){
//     this.arr = [];
//   }
// }

// Este código define una función constructora llamada Queue que crea un objeto de tipo cola. La cola se implementa como un array que se guarda como propiedad arr del objeto Queue.

function Queue() {//funcion "cola"=funcion constructora porque inicia con mayuscula 
  this.arr = [];
}
// enqueue(value): Este método recibe un argumento value y agrega ese valor al final de la cola, es decir, a la última posición del array arr.
Queue.prototype.enqueue = function (value){ //prototype => enlaza el objeto Queue cuando esta fuera de la funcion bloque 
  this.arr.push(value);//value es que recibe un objeto el array =>push agrega el objeto al final del array
};//la palabra  enqueue => poner en cola

// dequeue(): Este método elimina y devuelve el primer elemento de la cola, es decir, el elemento que se encuentra en la primera posición del array arr.
Queue.prototype.dequeue = function (){//la palabra  enqueue => sacar de la cola
  return this.arr.shift();//shift retira el primer arreglo del array=> () estos signos indican que recibira un objeto 
  //retorno el elemento que saco como salir y volver 
};

// size(): Este método devuelve la cantidad de elementos que hay en la cola, es decir, la longitud del array arr.
Queue.prototype.size = function (){
  return this.arr.length;
};

//esto es una estancia de un objeto de Queue o funcion constructora
const queue = new Queue();//me crea una funcion 
console.log(typeof queue.enqueue)//.toBe('function');
console.log(typeof queue.dequeue)//.toBe('function');
console.log(typeof queue.size)//toBe('function');
console.log(queue.size())//.toBe(0);
queue.enqueue('first in line');
console.log(queue.size())//.toBe(1);
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
queue.dequeue();
console.log(queue.size())//.toBe(2);
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
console.log(queue.size())//.toBe(3);
console.log(queue.dequeue())//.toBe('first');
console.log(queue.size())//.toBe(2);
console.log(queue.dequeue())//.toBe('second');
console.log(queue.size())//.toBe(1);
console.log(queue.dequeue())//.toBe('third');
console.log(queue.size())//.toBe(0);
queue.enqueue('first in line');
console.log(queue.size())//.toBe(1);
console.log(queue.dequeue())//.toBe('first in line');
console.log(queue.size())//.toBe(0);
console.log(queue.dequeue())//.toBe(undefined);
console.log(queue.size())//.toBe(0);
console.log(queue.dequeue())//.toBe(undefined);
console.log(queue.size())//.toBe(0);
queue.enqueue(1);
console.log(queue.dequeue())//.toBe(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue())//.toBe(2);
queue.enqueue(4);
console.log(queue.dequeue())//.toBe(3);
console.log(queue.dequeue())//.toBe(4);
console.log(queue.dequeue())//.toBe(undefined);
var q2 = new Queue();
queue.enqueue('fullstack');
q2.enqueue('JavaScript');
console.log(q2.dequeue())//.toBe('JavaScript');
console.log(q2.dequeue())//.toBe(undefined);
console.log(queue.dequeue())//.toBe('fullstack');
console.log(queue.dequeue())//.toBe(undefined);

// Este código define una función constructora llamada Queue que crea un objeto de tipo cola. La cola se implementa como un array que se guarda como propiedad arr del objeto Queue.

// La cola tiene tres métodos definidos en su prototipo:

// enqueue(value): Este método recibe un argumento value y agrega ese valor al final de la cola, es decir, a la última posición del array arr.

// dequeue(): Este método elimina y devuelve el primer elemento de la cola, es decir, el elemento que se encuentra en la primera posición del array arr.

// size(): Este método devuelve la cantidad de elementos que hay en la cola, es decir, la longitud del array arr.

// Cada uno de estos métodos está definido en el prototipo de la función Queue usando la sintaxis de prototype. Esto significa que cada objeto Queue creado a partir de esta función tendrá acceso a estos métodos a través de la herencia de prototipos.