// Un árbol binario es una estructura de datos en la que cada nodo tiene como máximo dos hijos, llamados hijo izquierdo y hijo derecho. Cada nodo del árbol binario tiene una llave o valor y la relación entre los nodos se establece según el valor de sus llaves.

// En JavaScript, podemos representar un árbol binario utilizando objetos. Cada objeto representa un nodo y tiene tres propiedades: value, left y right. La propiedad value contiene el valor del nodo y las propiedades left y right contienen los nodos hijos izquierdo y derecho, respectivamente.

// Por ejemplo, podemos crear un árbol binario con los siguientes nodos:

// 10
// /  \
// 6   14
// / \  / \
// 4   8 12  16

// Podemos representar este árbol binario de la siguiente manera en JavaScript:

const tre = {
    value: 10,
    left: {
      value: 6,
      left: {
        value: 4,
        left: null,
        right: null
      },
      right: {
        value: 8,
        left: null,
        right: null
      }
    },
    right: {
      value: 14,
      left: {
        value: 12,
        left: null,
        right: null
      },
      right: {
        value: 16,
        left: null,
        right: null
      }
    }
  };

//   Para realizar operaciones sobre árboles binarios, podemos utilizar funciones recursivas que recorran el árbol. Por ejemplo, podemos calcular la altura del árbol binario utilizando la siguiente función:

  function getHeight(tree) {
    if (tree === null) {
      return 0;
    } else {
      const leftHeight = getHeight(tree.left);
      const rightHeight = getHeight(tree.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  
  console.log(getHeight(tree)); // Output: 3

//   En este ejemplo, la función getHeight recibe como argumento el nodo raíz del árbol y devuelve la altura del árbol. La altura se calcula recursivamente como el máximo de las alturas del subárbol izquierdo y derecho más uno.

// Otro ejemplo de operación que podemos realizar sobre un árbol binario es la búsqueda de un valor. Podemos implementar esta operación utilizando la siguiente función:

function search(tree, value) {
    if (tree === null) {
      return false;
    } else if (tree.value === value) {
      return true;
    } else if (value < tree.value) {
      return search(tree.left, value);
    } else {
      return search(tree.right, value);
    }
  }
  
  console.log(search(tree, 12)); // Output: true
  console.log(search(tree, 5)); // Output: false

//   En este ejemplo, la función search recibe como argumentos el nodo raíz del árbol y el valor a buscar. La búsqueda se realiza recursivamente comparando el valor buscado con el valor del nodo actual y continuando la búsqueda en el subárbol izquierdo o derecho según corresponda.

// Espero que estos ejemplos te hayan ayudado a entender cómo funciona un árbol binario en JavaScript.

// Un árbol binario es una estructura de datos en la que cada nodo tiene como máximo dos hijos, denominados hijo izquierdo y hijo derecho. En JavaScript, se puede representar un árbol binario utilizando objetos y referencias. Cada objeto representará un nodo y tendrá dos propiedades, "left" y "right", que apuntarán a los nodos hijos.

// A continuación, se muestra un ejemplo de cómo se puede crear un árbol binario en JavaScript:

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  }
  
  const tree = new BinaryTree();
  
  tree.insert(8);
  tree.insert(3);
  tree.insert(10);
  tree.insert(1);
  tree.insert(6);
  tree.insert(14);
  tree.insert(4);
  tree.insert(7);
  tree.insert(13);

//   En este ejemplo, se crea una clase Node para representar los nodos del árbol, y una clase BinaryTree para representar el árbol en sí. La clase BinaryTree tiene un método insert que permite agregar un nuevo valor al árbol. El método _insertNode es un método auxiliar que se utiliza para insertar el nuevo nodo de manera recursiva, comparando el valor del nuevo nodo con el valor del nodo actual y moviéndose hacia la izquierda o hacia la derecha según corresponda.

// Para probar el árbol binario, se puede utilizar el siguiente código para recorrerlo en orden:

function inOrderTraversal(node) {
    if (node) {
      inOrderTraversal(node.left);
      console.log(node.value);
      inOrderTraversal(node.right);
    }
  }
  
  inOrderTraversal(tree.root);

// Este código recorre el árbol en orden, imprimiendo los valores de los nodos en orden ascendente. El resultado debería ser:

1
3
4
6
7
8
10
13
14

// Otro ejercicio que se puede hacer es implementar un método search en la clase BinaryTree que permita buscar un valor en el árbol. El método podría implementarse de la siguiente manera:

class BinaryTree {
    // ...
  
    search(value) {
      return this._searchNode(this.root, value);
    }
  
    _searchNode(node, value) {
      if (!node) {
        return null;
      } else if (value === node.value) {
        return node;
      } else if (value < node.value) {
        return this._searchNode(node.left, value);
      } else {
        return this._searchNode(node.right, value);
      }
    }
  }
  
  const node = tree.search(6);
  console.log(node.value); // 6


/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

//funcion constructora porque inicia con letra mayuscula 
function BinarySearchTree(value) {
  this.value = value;//parametros de la function constructora 
  this.left = null;//parametros de la function constructora izquierda
  this.rigth = null;//parametros de la function constructora derecha 
};

//metodo completo para insertar en un nodo derecha o izquierda 
BinarySearchTree.prototype.insert = function(value) {//forma de crear metodos en un arbol
 
  if(value < this.value){
  if(!this.left){//tambien funsiona => if(!this.left)
     this.left = new  BinarySearchTree(value);
  }else{
     this.left.insert(value);//inserto el valor a minodo hijo a la izquierda
  }
 }else{

  if(!this.rigth){
     this.rigth = new  BinarySearchTree(value);
 }else{
  this.rigth.insert(value);//inserto el valor a mi nodo hijo a la derecha 
 }

 }

};

BinarySearchTree.prototype.contains = function(target){
  //caso base
  if(target === this.value)return true;
  if(target < this.value){
     if(!this.left)return false;
     return this.left.contains(target);
  } else {
     if(!this.rigth) return false;
     return this.rigth.contains(target);
  }
};
  
    


BinarySearchTree.prototype.depthFirstForEach = function(cb, order){

if(order === 'in-order' || order === undefined){
  //left root rigth
  if(this.left) this.left.depthFirstForEach(cb, order);
  cb(this.value);
  if(this.rigth) this.rigth.depthFirstForEach(cb, order);
} else if(order === 'pre-order') {
  //root left rigth
  cb(this.value);
  if(this.left) this.left.depthFirstForEach(cb, order);
  if(this.rigth) this.rigth.depthFirstForEach(cb, order);
} else if(order === 'pre-order') {
  //left rigth root 
  if(this.left) this.left.depthFirstForEach(cb, order);
  if(this.rigth) this.rigth.depthFirstForEach(cb, order);
  cb(this.value);//root
}
};




BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {//array = []=>parametro por default
  
  cb(this.value);//se guarda el valor de la raiz del arbol 
  if(this.left) array.push(this.left);//agrega en el array el numero del nodo del arbol a la izquierda si esta  
  if(this.rigth) array.push(this.rigth);  //agrega en el array el numero del nodo del arbol a la derecha si esta
  if(array.length > 0){//si el valor es mayor a cero siga  a  la siguinete funcion
     array.chift().breadthFirstForEach(cb, array);//array.chft=>borra el valor anterios y hace el array y el numero del colback
  }
};

BinarySearchTree.prototype.size = function () { //forma de crear metodos en un arbol
   
 if(!this.left && !this.rigth) return 1;
 if(this.left && this.rigth) {
    return 1 + this.left.size () + this.rigth.size ();
  }
 if(this.left)return 1 + this.left.size();
 if(this.rigth)return 1 + this.rigth.size();
};
     
//   let tree = new BinarySearchTree(20)
//   tree.insert (15);
//   tree.insert(20);
//   console.log(tree);
//   console.log(tree.value);
//   console.log(tree.lefth.value);
//   console.log(tree.size());
/*
! El recorrido postorder de un árbol binario es un método de recorrido que visita los nodos de un árbol binario en el siguiente orden: primero visitando el hijo izquierdo, luego el hijo derecho y, finalmente, el nodo raíz.

! En Javascript, se puede implementar un recorrido postorder de un árbol binario utilizando una función recursiva. Aquí hay un ejemplo de código que muestra cómo hacerlo:
*/
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function postOrderTraversal(root) {
  if (!root) {
    return [];
  }
  const result = [];
  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
    result.push(node.val);
  };
  traverse(root);
  return result;
}

// Ejemplo de uso:
const tree1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.log(postOrderTraversal(tree)); // Output: [4, 5, 2, 3, 1]

// * En este ejemplo, primero creamos un árbol binario utilizando la clase TreeNode. Luego, definimos una función postOrderTraversal que acepta un nodo raíz y devuelve un array con los valores de los nodos visitados en orden postorder.

// * Dentro de la función postOrderTraversal, primero comprobamos si el nodo raíz es nulo, en cuyo caso devolvemos un array vacío. Si el nodo raíz no es nulo, inicializamos un array vacío result para almacenar los valores de los nodos visitados en orden postorder.

// * Luego, definimos una función recursiva traverse que acepta un nodo como argumento. Dentro de esta función, primero verificamos si el nodo tiene un hijo izquierdo, en cuyo caso llamamos recursivamente a traverse en el hijo izquierdo.

// * A continuación, verificamos si el nodo tiene un hijo derecho, en cuyo caso llamamos recursivamente a traverse en el hijo derecho.

// * Finalmente, agregamos el valor del nodo actual al array result.

// * Finalmente, llamamos a traverse con el nodo raíz y devolvemos el array result.

// * En el ejemplo de uso, creamos un árbol binario y lo pasamos a la función postOrderTraversal. El resultado se muestra por consola y es [4, 5, 2, 3, 1], que es el orden postorder de los valores de los nodos en el árbol.

/*
!  El método Preorder (preorden) en árboles binarios es un algoritmo de recorrido que visita primero el nodo raíz, luego el subárbol izquierdo y finalmente el subárbol derecho. En JavaScript, podemos implementar el método Preorder utilizando una función recursiva.

! Aquí hay un ejemplo de implementación del método Preorder en JavaScript:
*/

class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

function Preorder(raiz) {
  if (raiz === null) return;

  console.log(raiz.valor);
  Preorder(raiz.izquierda);
  Preorder(raiz.derecha);
}

// Ejemplo de uso
const arbol = new Nodo(1);
arbol.izquierda = new Nodo(2);
arbol.derecha = new Nodo(3);
arbol.izquierda.izquierda = new Nodo(4);
arbol.izquierda.derecha = new Nodo(5);

Preorder(arbol); // Imprime: 1 2 4 5 3

// ? En este ejemplo, creamos un árbol binario con una raíz de valor 1 y dos hijos, 2 y 3. El nodo 2 tiene dos hijos, 4 y 5. Luego, utilizamos la función Preorder para imprimir los valores de los nodos del árbol en orden Preorder.

// * La salida del ejemplo sería:

1
2
4
5
3

// ? Esto significa que el método Preorder visitó primero el nodo raíz (1), luego el subárbol izquierdo (2, 4, 5) y finalmente el subárbol derecho (3).

// ! El método Inorder (inorden) en árboles binarios es un algoritmo de recorrido que visita primero el subárbol izquierdo, luego el nodo raíz y finalmente el subárbol derecho. En JavaScript, podemos implementar el método Inorder utilizando una función recursiva.

// * Aquí hay un ejemplo de implementación del método Inorder en JavaScript:

class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

function Inorder(raiz) {
  if (raiz === null) return;

  Inorder(raiz.izquierda);
  console.log(raiz.valor);
  Inorder(raiz.derecha);
}

// Ejemplo de uso
const arbol = new Nodo(1);
arbol.izquierda = new Nodo(2);
arbol.derecha = new Nodo(3);
arbol.izquierda.izquierda = new Nodo(4);
arbol.izquierda.derecha = new Nodo(5);

Inorder(arbol); // Imprime: 4 2 5 1 3

// ? En este ejemplo, creamos un árbol binario con una raíz de valor 1 y dos hijos, 2 y 3. El nodo 2 tiene dos hijos, 4 y 5. Luego, utilizamos la función Inorder para imprimir los valores de los nodos del árbol en orden Inorder.

// La salida del ejemplo sería:

4
2
5
1
3

// Todo: Esto significa que el método Inorder visitó primero el subárbol izquierdo (4, 2, 5), luego el nodo raíz (1) y finalmente el subárbol derecho (3).