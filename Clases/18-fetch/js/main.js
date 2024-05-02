const getKoders = async () => {
  //Se crea la peticion
  // await, se espera hasta que se resuelva la promesa
  let response = await fetch('https://javascript33-82ab4-default-rtdb.firebaseio.com/koders/.json')

  //desempaquetar 
  // .json() igual es una promesa y lleva el await
  let koders = await response.json()
  console.log("🚀 ~ getKoders ~ koders:", koders)
  /* for (key in koders){
    console.log(key)
    console.log(koders[key])
  } */

  let keys = Object.keys(koders)
  console.log("🚀 ~ getKoders ~ keys:", keys)
  let values = Object.values(koders)
  console.log("🚀 ~ getKoders ~ values:", values)

  // transformar data a array
  let kodersArray = keys.map(key => {
    return {...koders[key], key}
  })
  console.log("🚀 ~ kodersArray ~ kodersArray:", kodersArray)
  printKoders(kodersArray, 'koders-list')
}
getKoders()

const postKoder = async(koderObject) => {
  // el servidor devuelve una respuesta 
  let response = await fetch('https://javascript33-82ab4-default-rtdb.firebaseio.com/koders/.json',{
    method:'POST',
    body: JSON.stringify(koderObject)
  })
  let data = await response.json() // para desempaquetar la respuesta del servidor
  console.log("🚀 ~ postKoder ~ data:", data) 
}

const saveKoderBtn = document.getElementById('save-koder-btn')

saveKoderBtn.addEventListener('click', ()=>{
  let inputs = document.querySelectorAll('#koder-form input')
  let koderObject = {}

  inputs.forEach(({name, value}) => {
    koderObject[name] = value

  })
})