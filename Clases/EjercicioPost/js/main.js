import {getPost, sendPost} from '../modules/api/api.js'
import { printPosts } from '../modules/utils/showPosts.js'

const getDataPost = async () => {
  let postsArray = await getPost()
  printPosts(postsArray, 'box-container-posts')
  console.log(postsArray)
}

getDataPost()

const showImgPreview = () => { 
  let showImg = document.getElementById('img-post') // imagen de formulario
  let inputImg = document.getElementById('img-source') // entrada para url imagen en formulario
  // imagen de en formulario
  inputImg.addEventListener('keyup', (event) => {
    let textImg = event.target.value
    showImg.setAttribute('src', textImg)
  })
}

showImgPreview()

const formData = () => {
  const fields = document.querySelectorAll('#form-data input')

  const postObject = {}
  fields.forEach((formInput) => {
    postObject[formInput.name] = formInput.value
  })

  return postObject
}

let saveBtn = document.getElementById('save-post') //boton de guardar

// evento de boton guardar de formulario
saveBtn.addEventListener('click', (event) => {
  event.preventDefault() // evita envio de info de formulario, revisar para database
  const postObject = formData()
  sendPost(postObject)
  console.log(postObject)
})
