// En JavaScript, una variable es un contenedor que se utiliza para almacenar datos. Las variables en JavaScript se pueden definir utilizando la palabra clave "var", "let" o "const", y se les puede asignar un valor. Aquí hay una explicación más detallada de cada tipo de variable:

// Var:
// La palabra clave "var" se usó para definir variables en versiones anteriores de JavaScript, pero aún se puede usar en versiones más recientes. Las variables definidas con "var" tienen un alcance de función, lo que significa que solo son accesibles dentro de la función donde se definen, o globalmente si se definen fuera de una función. Además, las variables definidas con "var" pueden ser redefinidas y actualizadas en cualquier parte del código.
// Ejemplo:

function ejemplo() {
    var x = 10;
    if (true) {
      var x = 20;
      console.log(x); // 20
    }
    console.log(x); // 20
  }
  ejemplo();

//   Let:
// La palabra clave "let" se utiliza para definir variables que tienen un alcance de bloque, lo que significa que solo son accesibles dentro del bloque donde se definen. Las variables definidas con "let" también se pueden actualizar, pero no se pueden redefinir en el mismo alcance.
// Ejemplo:

function ejemplo() {
    let x = 10;
    if (true) {
      let x = 20;
      console.log(x); // 20
    }
    console.log(x); // 10
  }
  ejemplo();

//   Const:
// La palabra clave "const" se utiliza para definir variables que no pueden ser reasignadas. Una vez que se asigna un valor a una variable constante, no se puede cambiar en el futuro. Las variables definidas con "const" también tienen un alcance de bloque.
// Ejemplo:

function ejemplo() {
    const x = 10;
    if (true) {
      const x = 20;
      console.log(x); // 20
    }
    console.log(x); // 10
  }
  ejemplo();

//   Además de estos tipos de variables, JavaScript también tiene tipos de datos incorporados, como números, cadenas de texto, booleanos, objetos y arreglos, que se pueden asignar a variables y manipular según sea necesario.