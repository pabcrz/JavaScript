import { printPosts } from "../utils/showPosts.js"

const getPost = async () => {
  let response = await fetch(
    'https://postprueba1-5c11d-default-rtdb.firebaseio.com/Posts/.json'
  )
  let Posts = await response.json()
  console.log(Posts)

  let keys = Object.keys(Posts) //manda a llamar metodo object
  console.log(keys)

  let postsArray = keys.map((key) => {
    return { ...Posts[key], key }
  })
  console.log(postsArray)
  return postsArray
}

const sendPost = async (postObject) => {
  let sendData = await fetch(
    'https://postprueba1-5c11d-default-rtdb.firebaseio.com/Posts/.json',
    {
      method: 'POST',
      body: JSON.stringify(postObject)
    }
  )
  let data = await sendData.json() //desempaquetar info enviada
  console.log(data)
  let postsArray = await getPost()
  printPosts(postsArray, 'box-container-posts')
}

export { getPost, sendPost }
