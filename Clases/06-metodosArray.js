/* 1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra se debe seleccionar por su posicion.
( quiero saber la longitud de la segunda palabra)
si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error
2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y recibir una nueva frase sin la palabra borrada
3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas
4.- Se requiere obtener la frase, pero escrita en orden inve */

const phrase = 'La mejor forma de predecir el futuro es creándolo'

/* 1. cantidad de letras de una palabra por indice 
1. Dividir la frase por palabras
2. Contar la longitud del indice 1
3. Validar la posicion que se esta pidiendo */

const words = phrase.split(' ')

const wordLength = (index) => {
  // length es un numero, nos da el total de posiciones, por lo tanto es mayor a la ultima posicion del array
  if (index < 0 || index >= words.length){
    return console.log('Ingresa un indice valido')
  } else {
    return console.log(`La palara en el indice ${index} es '${words[index]}'.`)
  }
}

/* 2. Eliminar una palabra por su posicion, dar una frase sin la plabra que se borro 
1. Acceder al indice del array
2. eliminar el contenido de la posicion seleccionada con splice, recibe tres argumentos (index, 0 o 1, 'remplazo') */
const deleteWord = (index) => {
  if (index < 0 || index >= words.length){
    return console.log('Ingresa un indice valido')
  } else {
    words.splice(index,1)
    // join une los elementos de un array en un string, y recibe el parametro que unira los elementos.
    return console.log(words.join(' '))
  }
}

wordLength(8)
deleteWord(4)