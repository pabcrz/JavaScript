import { printPosts } from "../utils/showPosts.js"

const getPost = async () => {
  let response = await fetch(
    'https://postprueba1-5c11d-default-rtdb.firebaseio.com/Posts/.json'
  )
  let posts = await response.json()
  console.log(Posts)

  let keys = Object.keys(posts) //manda a llamar metodo object
  console.log(keys)

  let postsArray = keys.map((key) => {
    return { ...posts[key], key }
  })
  console.log(postsArray)
  return postsArray
}

const sendPost = async (postObject) => {
  let sendData = await fetch(
    'https://postprueba1-5c11d-default-rtdb.firebaseio.com/Posts/.json',
    {
      method: 'POST', //metodo a usar
      body: JSON.stringify(postObject) // lo que se va a enviar
    }
  )
  let data = await sendData.json() //desempaquetar info enviada
  console.log(data)
  let postsArray = await getPost()
  printPosts(postsArray, 'box-container-posts')
}

export { getPost, sendPost }
