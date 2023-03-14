// MATRIZ

// 1. Se crea una clase Matriz con un constructor que recibe dos parámetros, alto y ancho. 
// 2. Dentro del constructor se crea un array vacío llamado data y se recorren los parámetros alto y ancho para asignar a cada posición del array el valor undefined. 
// 3. Se crea el método buscar que recibe como parámetro un valor, el cual se busca dentro del array data y si es encontrado devuelve la posición en la que se encuentra. 
// 4. Se crea el método sumar que recibe como parámetro otra matriz, para luego recorrer ambas matrices y sumar los valores de cada posición de la misma forma en la que están ubicados en las matrices para luego devolver una nueva matriz con los resultados de las sumas. 
// 5. Se crea el método restar que funciona igual al método sumar pero restando los valores de cada posición de las matrices para luego devolver una nueva matriz con los resultados de las restas. 
// 6. Se crea el método multiplicar que recibe como parámetro otra matriz, para luego recorrer ambas matrices y multiplicar los valores de cada posición de la misma forma en la que están ubicados en las matrices para luego devolver una nueva matriz con los resultados de las multiplicaciones. 
// 7. Por último, se crea el método print() para imprimir por consola la información contenida en la matriz data

class Matriz {

    constructor(alto, ancho) {
      this.data = [];
      for (var i=0; i<alto; i++) {
        this.data[i] = [];
        for (var j=0; j<ancho; j++) {
          this.data[i][j] = undefined;
        }
      }
    }
  
    buscar(val) {
      for (var i=0; i<this.data.length; i++) {
        for (var j=0; j<this.data[i].length; j++) {
          if (this.data[i][j] == val) return [i,j];
        }
      }
    }
  
    sumar(mat) {
      var newMatriz = [];
      for (var i=0; i<this.data.length; i++) {
        newMatriz[i]=[];
        for (var j=0 ; j<this.data[i].length; j++) {
          newMatriz[i][j] = this.data[i][j]+mat[i][j];
        }
      }
      return newMatriz;
    }
  
    restar(mat) {
      var newMatriz = [];
      for(var i=0; i<this.data.length; i++) {
        newMatriz[i] = [];
        for (var j=0; j<this.data[i].length; j++ ) {
          newMatriz[i][j] = this.data[i][j]-mat[i][j];
        }
      }
      return newMatriz;
    }
  
    multiplicar(mat) {
      var newMatriz = [];
      var suma = 0;
      for( var i=0; i<this.data.length; i++) {
        newMatriz[i]=[];
        for (var j=0; j<this.data[i].length; j++) {
          for (var k=0; k<array.length; k++) {
            suma += this.data[k][j] * mat[j][k];
          }
          newMatriz[i][j] = suma;
        }
      }
      return newMatriz;
    }
  
    print() {
      var mat = this.data;
      for( var i = 0; i < mat.length; i++ ){
        let linea = '['
        for (var j = 0; j < mat[i].length; j++) {
            linea += mat[i][j] + (j === mat[i].length-1 ? '' : ',')
        }
        console.log(linea + ']')
      }
    }
  }