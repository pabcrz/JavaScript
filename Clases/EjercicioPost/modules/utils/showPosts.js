import { createPost } from './createCardPost.js'
//imprimir card
const printPosts = (postsArray, containerPost) => {
  let container = document.getElementById(containerPost)

  // eliminacion del primer elemento de lista para evitar repetir
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }

  postsArray.forEach((can) => container.append(createPost(can)))
}

export { printPosts }
