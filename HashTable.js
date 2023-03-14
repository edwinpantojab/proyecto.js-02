
/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

// Este código define una estructura de datos llamada Hash Table (Tabla Hash) que se utiliza para almacenar pares clave-valor. Una tabla hash es una estructura de datos que utiliza una función hash para mapear claves a índices en una matriz. Esta implementación utiliza un arreglo para almacenar los datos y la función hash utiliza el valor de la clave para calcular el índice correspondiente en el arreglo.

// La función HashTable define un constructor que toma un argumento opcional que especifica el número de "buckets" (compartimentos) que se utilizarán para almacenar los datos. Si no se proporciona ningún argumento, se utiliza un valor predeterminado de 35. La propiedad numBuckets se establece en el número de compartimentos especificados o en 35 si no se proporciona ningún valor.

// La propiedad data es un arreglo que contiene los datos almacenados en la tabla hash.

// La función hash es un método que toma una clave y devuelve un índice en el arreglo utilizando una función hash. La función hash utilizada en este código suma el valor de los códigos de caracteres de la clave para calcular un valor de dispersión, que luego se reduce utilizando la operación módulo (%), para asegurarse de que el índice se encuentra dentro del rango de los compartimentos disponibles.

// El método set se utiliza para agregar un par clave-valor a la tabla hash. Si la clave no es una cadena, se lanza un error. La función hash se utiliza para determinar en qué compartimento se almacenará el par clave-valor. Si el compartimento no existe, se crea un nuevo objeto vacío. Luego, el valor se agrega al objeto con la clave como propiedad.

// El método get se utiliza para recuperar un valor de la tabla hash utilizando la clave. La función hash se utiliza para determinar en qué compartimento se debe buscar el valor. Si el compartimento no existe, se devuelve undefined. Si el compartimento existe, se busca el valor utilizando la clave y se devuelve el valor correspondiente.

// El método hasKey se utiliza para determinar si una clave se encuentra en la tabla hash. La función hash se utiliza para determinar en qué compartimento se debe buscar la clave. Si el compartimento existe y contiene la propiedad con el nombre de la clave, se devuelve true. De lo contrario, se devuelve false.

function HashTable(buckets) {
    this.numBuckets = buckets || 35;
    this.data = new Array(this.numBuckets);
  };  
  
  HashTable.prototype.hash = function(key) {
    let code = 0;
    for (let i = 0; i < key.length; i++){
      code += key.charCodeAt(i);
    }
    return code % this.numBuckets;
  };
  
  HashTable.prototype.set = function(key, value) {//set guardar valores
    //typeof => es tipo de dato 
    if(typeof key !== "string") throw new TypeError('Keys must be strings');
    const bucket = this.hash(key);
    if(!this.data[bucket]){
    this.data[bucket] = {};
    }
    this.data[bucket][key] = value;
  };
  
  HashTable.prototype.get = function(key) {
    const bucket = this.hash(key);
    if(this.data[bucket])return this.data[bucket][key];
    return undefine;
  };
  
  HashTable.prototype.hasKey = function(key) {
    const bucket = this.hash(key);
    if(this.data[bucket])return this.data[bucket].hasOwnProperty(key);
    return false;
  };
  
  
  //let  hashTable = new HashTable ();
  //console.log(hashTable.numBuckets);
  
  // No modifiquen nada debajo de esta linea
  // --------------------------------
  
  module.exports = {
     Node,
     LinkedList,
     HashTable,
  };
//   En JavaScript, un HashTable es una estructura de datos que se utiliza para almacenar elementos en una tabla hash. Una tabla hash es una estructura de datos que utiliza una función hash para calcular una posición única en la tabla para cada elemento que se va a almacenar.

// La función hash toma una clave (como una cadena o un número) y la convierte en un índice de la tabla hash. Luego, el valor se almacena en la posición correspondiente en la tabla hash.

// La ventaja de utilizar una tabla hash es que la búsqueda, inserción y eliminación de elementos se pueden hacer en un tiempo constante (O(1)) en el mejor de los casos. Sin embargo, en el peor de los casos, el tiempo de ejecución puede ser O(n) si hay colisiones en la tabla hash.

// Aquí hay un ejemplo de cómo se podría implementar un HashTable en JavaScript utilizando una función hash simple que utiliza el código ASCII de las letras para calcular el índice:

class HashTable {
  constructor() {
    this.table = new Array(26);
  }

  hash(key) {
    let index = key.charCodeAt(0) - 97;
    return index;
  }

  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }

  delete(key) {
    let index = this.hash(key);
    this.table[index] = undefined;
  }
}

let table = new HashTable();
table.set("a", 1);
table.set("b", 2);
table.set("c", 3);

console.log(table.get("a")); // Output: 1
console.log(table.get("b")); // Output: 2
console.log(table.get("c")); // Output: 3

table.delete("b");

console.log(table.get("b")); // Output: undefined

// En este ejemplo, la función hash convierte la letra en su valor ASCII y luego la resta por 97 (el valor ASCII de 'a') para obtener el índice en la tabla hash. Luego, la función set almacena el valor en la posición correspondiente en la tabla hash, get devuelve el valor almacenado en la posición de la tabla hash y delete elimina el valor de la tabla hash.