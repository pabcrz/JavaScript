//creacion de cards para mascotas
const createPost = (canObject) => {
  let { imagen, titulo, contenido, autor } = canObject

  let containerCard = document.createElement('div')
  containerCard.classList.add('card', 'col-12', 'col-md-5', 'mt-3')

  let dogImgCard = document.createElement('img')
  //dogImgCard.classList.add("mt-3")
  dogImgCard.setAttribute('src', imagen)

  let bodyCardText = document.createElement('div')
  bodyCardText.classList.add('card-body', 'text-left')

  let raceTitle = document.createElement('h5')
  raceTitle.classList.add('card-title')
  raceTitle.innerText = titulo

  let line1 = document.createElement('dl')
  line1.classList.add('row')

  let titleSize = document.createElement('dt')
  let textTitleSize = document.createTextNode('Contenido')
  titleSize.classList.add('col-4')
  titleSize.append(textTitleSize)

  let textSize = document.createElement('dd')
  textSize.classList.add('col-8')
  textSize.innerText = contenido

  line1.append(titleSize, textSize)

  let line2 = document.createElement('dl')
  line2.classList.add('row')

  let titleOrigin = document.createElement('dt')
  let textTitleOrigin = document.createTextNode('Autor')
  titleOrigin.classList.add('col-4')
  titleOrigin.append(textTitleOrigin)

  let textOrigin = document.createElement('dd')
  textOrigin.classList.add('col-8')
  textOrigin.innerText = autor

  line2.append(titleOrigin, textOrigin)

  bodyCardText.append(raceTitle, line1, line2)

  containerCard.append(dogImgCard, bodyCardText)

  return containerCard
}

export { createPost }
