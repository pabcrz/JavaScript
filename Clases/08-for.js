const phrase = 'La mejor forma de predecir el futuro es creándolo'

const countVowels = (phrase) => { 
  const vowels = /[AEIOUaeiouÁÉÍÓÚáéíóúüÜ]/g
  let total = 0

  for (i = 0 ; i < phrase.length ; i++) {
    let isVowel = vowels.test(phrase.charAt(i))
    if (isVowel) total++
  }
  return total
}

console.log(countVowels(phrase))
