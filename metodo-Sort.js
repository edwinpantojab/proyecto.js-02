function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    
    let len = array.length;//este es donde se guadara el array resultante ordenado de menor a mayor 
   
      for (let i = 0; i < len; i++) {//bucle que recorre el array de i
        
          for (let j = 0; j < len; j++) {
            
              if (array[j] > array[j + 1]) {
                
                  let tmp = array[j];
                  
                  array[j] = array[j + 1];
                  
                  array[j + 1] = tmp;
                  
              }
          }
      }
      return array;
  };
  //console.log(bubbleSort([5, 1, 4, 2, 8]));//[1, 2, 4, 5, 8]
  
  
  
  function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    let n = array.length;
          for (let i = 1; i < n; i++) {
              // Choosing the first element in our unsorted subarray
              let current = array[i];
              // The last element of our sorted subarray
              let j = i-1; 
              while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                  j--;
              }
              array[j+1] = current;
          }
      return array;
  };
  console.log(insertionSort([10, -2, -7, 4]));//[-7, -2, 4, 10]
  
  
  function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    let n = array.length;
          
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(array[j] < array[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
    }
    return array;
  };
  console.log(insertionSort([5, 1, 4, 2, 8]));//[ 1, 2, 4, 5, 8 ]

  //function quickSort(array) {//quickSort => ORDENAMIENTO 
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    
    //              DESARROLLO DEL PROBLEMA function quickSort(array)
    //1-recibo por parametro en la funcion un array vacio*
    //2-verifico con un buleano if si es false o true que el array esta vacio o tiene elementos*
    //3-creo una varible left => izquierda con un array vacio para guadar los elementos menores del pivote a la izquierda*
    //3-creo una varible rigth => derecha con un array vacio para guardar los elementos mayores del pivote a la derecha*
    //4-creo una varible con el nombre pivot con un parametro array vacio que inicia en cero*
    //5-utilizo un bucle for(condicion + condicion)para recorrer mi array que inicia en el indice 1*
    //6-agrego los elementos a la izquierda de mi array en i porque son los menores al pivote*
    //7-agrego los elementos a la derecha de mi array en i porque son los mayores al pivote*
    //8-retorno un array vacio donde boy a concatenar mi array de la izquierda-mi pivote-mis array de la derecha 
    
    // function quickSort (array){

    //     if(array.length < 1){
    //         return [];
    //     }
    //     let left = [];
    //     let rigth = [];
    //     let pivot = array[0];
        
    //     for(var i = 1; i < array.length; i++)
    //         if (array[i] < pivot){
    //         left.push(array[i]);

    //     }else{

    //         rigth.push(array[i])
    //     }
        
    //     return [].concat(quickSort(left), pivot, quickSort(rigth));
    // };
    // console.log(quickSort([5, 1, 4, 2, 8]));//[ 1, 2, 4, 5, 8 ]

function quickSort (array){
   
    if (array.length < 1){
        return [];
    }
    let left = [];
    let rigth = [];
    let pivot = array[0];

    for (let i = 1; i < array.length; i++){

        if(array[i] < pivot){
            
            left.push(array[i]);
        
        }else{

            if(array[i] > pivot)
            rigth.push(array[i]);
        }

           
    }

    return [].concat(quickSort(left), pivot, quickSort(rigth));
}
console.log(quickSort([4, 2, 5, 8, 1]));//[ 1, 2, 4, 5, 8 ]



function mergeSort(array) {//ORGANIZA LA MITAD DERECHA Y LA MITAD DERECHA
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    let media = Math.floor(array.length / 2);
    let rigth = array.slice(0, media);
    let left = array.slice(media);
  
    if(array.length < 1){
      return [];
    }
    rigth = mergeSort(left);
    left = mergeSort(rigth);
  
    var sorted = [];
    while(left.length[0] && rigth.length[0]){
     if(left[0] < rigth[0]){
      sorted.push(left.shift());
     }else{
      sorted.push(rigth.shift());
     }
    }
    return sorted.concat(left, rigth);
  };
  console.log(mergeSort([5, 1, 4, 2, 8]));
    