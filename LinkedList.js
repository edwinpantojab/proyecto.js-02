// Las listas enlazadas en JavaScript son una estructura de datos que se utiliza para almacenar una secuencia de elementos. Cada elemento se almacena en un nodo, que contiene un valor y un puntero que apunta al siguiente nodo en la secuencia.

// Para crear una lista enlazada, primero necesitas definir una clase para el nodo. La clase debe tener propiedades para almacenar el valor del nodo y un puntero al siguiente nodo en la secuencia.

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

//   Una vez que has definido la clase de nodo, puedes crear una clase para la lista enlazada en sí. La lista enlazada tiene un puntero al primer nodo de la secuencia, y puede tener otros métodos para agregar o eliminar nodos de la lista.

  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    add(value) {
      const node = new Node(value);
      if (this.head === null) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = node;
      }
    }
    
    remove(value) {
      if (this.head === null) {
        return;
      }
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next !== null) {
        if (current.next.value === value) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
    
    print() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }

//   El método add agrega un nodo al final de la lista. Si la lista está vacía, el nodo se convierte en el primer nodo de la lista. Si la lista no está vacía, se recorre la lista hasta el último nodo y se agrega el nuevo nodo allí.

// El método remove elimina un nodo de la lista. Si el valor a eliminar es el primer nodo de la lista, se actualiza el puntero de head para apuntar al siguiente nodo. Si el valor a eliminar está en otro lugar de la lista, se recorre la lista hasta encontrar el nodo que contiene el valor y se actualiza el puntero del nodo anterior para saltar el nodo que contiene el valor.

// El método print recorre la lista e imprime el valor de cada nodo en la consola.

// Aquí hay algunos ejemplos de uso de una lista enlazada:

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Imprime 1 2 3
list.remove(2);
list.print(); // Imprime 1 3

// En este ejemplo, creamos una lista enlazada y agregamos tres nodos con valores 1, 2 y 3. Luego, imprimimos los valores de la lista en la consola. A continuación, eliminamos el nodo con el valor 2 y volvemos a imprimir los valores de la lista en la consola.

// Aquí hay algunos ejercicios que puedes intentar para practicar el uso de listas enlazadas:

// Escriba un método para insertar un nuevo nodo en la lista después de un nodo


// 1. La función Lista() crea un objeto con dos propiedades, point y len. El punto es una referencia a un nodo y la longitud es el número de nodos en la lista. 
// 2. La función Nodo() crea un objeto con dos propiedades, data y next. Data almacena los datos del nodo y next es una referencia al siguiente nodo en la lista. 
// 3. La función push agrega un nuevo nodo al final de la lista. Si el punto es nulo, el punto se establece en el nuevo nodo, de lo contrario, se recorre la lista hasta encontrar el último nodo y luego se establece su next en el nuevo nodo. 
// 4. La función insertFirst agrega un nuevo nodo al principio de la lista. Si el punto es nulo, entonces se establece el punto en el nuevo nodo; de lo contrario, se guardan las referencias al primer nodo y luego se establece como primer elemento del nuevo nodo. 
// 5. La función insert agrega un nuevo elemento a cualquier posición de la lista que sea menor que su longitud actual (si no lo es, simplemente llama a push). Si la posición es 1, entonces simplemente establecemos el punto en el nuevo elemento; de lo contrario, recorremos hasta encontrar la posición deseada e insertamos nuestro elemento allí. 
// 6. La función print imprime todos los elementos de la lista desde el primero hasta el último (recorriendola). 
// 7. La función printOne imprime solo un elemento dado su posición (si excede la longitud actual devuelve 'Posicion fuera de rango'). 
// 8. La función deleteFirst elimina el primer elemento de la lista si hay algunos (si no hay devuelve 'Es una list vacía'). 
// 9. La función deleteLast elimina el último elemento si hay algunos (si no hay devuelve 'Es un vacílist vacía'). 
// 10. La función find busca por valor dentro de los datos del nodo y devuelve undefined si no lo encuentra o bien devuelve el objeto Nodo si lo encuentra

/* LISTAS ENLAZDAS */

function Lista(){
	this.point = null;
	this.len = 0;
}

function Nodo(data) {
	this.data = data;
	this.next = null;
}

Lista.prototype.push = function(data) { // Insert Last
	var newNodo = new Nodo(data);
	if (this.point == null) {
		this.point = newNodo;
	} else {
		pointer = this.point;
		while (pointer.next!=null) {
			pointer = pointer.next;
		}
		pointer.next = newNodo;
	}
	this.len++;
}

Lista.prototype.insertFirst = function(data) {
	var newNodo = new Nodo(data);
	if (this.point == null) {
		this.point = newNodo;
	} else {
		var pointer = this.point;
		this.point = newNodo;
		newNodo.next = pointer;
	}
	this.len++;
}

Lista.prototype.insert = function(data,pos) {
	if (this.len < pos) return this.push(data); 
	var newNodo = new Nodo(data);
	if (pos == 1) {
		newNodo.next = this.point;
		this.point = newNodo;
	}
	var pointer = this.point;
	while (pos > 1) {
		pos--;
		pointer = pointer.next;
	}
	newNodo.next = pointer.next;
	pointer.next = newNodo;
}

Lista.prototype.print = function() {
	pointer = this.point;
	while (pointer.next!=null) {
		console.log(pointer.data);
		pointer = pointer.next;
	}
	console.log(pointer.data);
}

Lista.prototype.printOne = function(pos) {
	if (pos > this.len) return console.log('Posicion fuera de rango.');
	pointer = this.point;
	var aux = pos;
	while (aux > 1) {
		aux--;
		pointer = pointer.next;
	}
	console.log('Data ['+pos+'] = '+pointer.data)
}

Lista.prototype.deleteFirst = function() {
	if (this.len == 0) return console.log('Es una lista vacia');
	this.point = this.point.next;
	this.len--;
}

Lista.prototype.deleteLast = function() {	
	pointer = this.point;
	while (pointer.next.next!=null) {
		pointer = pointer.next;
	}
	pointer.next = null;
	this.len--;
}

Lista.prototype.find = function(val) {
	if (this.len == 0) return console.log('Es una lista vacia');
	var pointer = this.point;
	var check = false;
	if (pointer.data == val) check = true;
	while (!check && pointer.next != null) {
		pointer = pointer.next;
		if (pointer.data == val) check = true;
	}
	if (check) {
		return pointer;
	} else {
		return undefined;	
	} 
}

// var list = new Lista();

// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);

// list.print()