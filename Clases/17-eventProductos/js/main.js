const button = document.getElementById('button-form')
const inputList = document.querySelectorAll('#products-form input')
let products = [
  {
    product: 'Teclado',
    description: 'Teclado mecanico Nuphy Air 75 v2',
    price: '2342',
    category: 'tecnologia',
    image: 'https://picsum.photos/seed/picsum/200/300'
  },
  {
    product: 'Teclado',
    description: 'Teclado mecanico Nuphy Air 95 v2',
    price: '3433',
    category: 'tecnologia',
    image: 'https://picsum.photos/seed/picsum/200/300'
  },
  {
    product: 'Cama',
    description:
      'cama con una descripcion larga para que se vea la funcion de cortar jaja',
    price: '23499',
    category: 'hogar',
    image: 'https://picsum.photos/seed/picsum/200/300'
  },
  {
    product: 'Cama chica',
    description: 'cama con una descripcion corta',
    price: '12345',
    category: 'hogar',
    image: 'https://picsum.photos/seed/picsum/200/300'
  }
]

const createProducts = () => {
  const productObject = {}
  inputList.forEach((input) => {
    productObject[input.name] = input.value
  })
  products = [...products, productObject]
  // products.push(productObject)
  console.log('createProducts ~ products:', products)
  printProducts(products, 'product-wrapper')
  printOptions(getCategories(products), 'category-select')
}

button.addEventListener('click', (event) => {
  event.preventDefault()
  createProducts()
})

const createProductCard = (productObject) => {
  const { product, description, price, category, image } = productObject
  const card = document.createElement('div')
  card.classList.add('card', 'col-6')
  card.style.width = '18rem'
  const imgCard = document.createElement('img')
  imgCard.classList.add('rounded-top')
  imgCard.setAttribute('src', image)

  const cardBody = document.createElement('div')
  cardBody.classList.add('card-body')
  const titleProduct = document.createElement('h5')
  titleProduct.classList.add('card-title')
  titleProduct.innerText = product
  const textDescription = document.createElement('p')
  textDescription.classList.add('card-text')
  textDescription.innerText =
    description.split(' ').length > 10
      ? `${description.split(' ', 10).join(' ')}...`
      : description

  const listGroup = document.createElement('ul')
  listGroup.classList.add('list-group', 'list-group-flush')
  const listCategory = document.createElement('li')
  listCategory.classList.add('list-group-item')
  listCategory.innerText = category
  const listPrice = document.createElement('li')
  listPrice.classList.add('list-group-item')
  listPrice.innerText = price

  listGroup.append(listCategory, listPrice)
  cardBody.append(titleProduct, textDescription, listGroup)
  card.append(imgCard, cardBody)

  return card
}

const printProducts = (dataArray, wrapperId) => {
  const wrapper = document.getElementById(wrapperId)

  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild)
  }

  dataArray.forEach((product) => {
    wrapper.append(createProductCard(product))
  })
}

printProducts(products, 'product-wrapper')

let filterInput = document.getElementById('search-category')

filterInput.addEventListener('keyup', (event) => {
  const query = event.target.value

  let result = products.filter((product) =>
    product.category.toLowerCase().includes(query.toLowerCase())
  )
  console.log(result)
  printProducts(result, 'product-wrapper')
})

const getCategories = (dataArray) => {
  let result = dataArray.reduce((accum, current) => {
    return accum.includes(current.category)
      ? accum
      : [...accum, current.category]
  }, [])
  console.log(result)
  return result
}

const createSelectOption = (optionLabel) => {
  const option = document.createElement('option')
  option.innerText = optionLabel
  option.value = optionLabel
  return option
}

const printOptions = (optionsArray, selectId) => {
  let select = document.getElementById(selectId)
  select.innerHTML = ''
  const optionDefalut = document.createElement('option')
  select.append(optionDefalut)
  optionsArray.forEach((option) => select.append(createSelectOption(option)))
}

let categorySelect = document.getElementById('category-select')
categorySelect.addEventListener('change', (event)=>{
  const query = event.target.value
  let result = products.filter(product => product.category.toLowerCase() === query.toLowerCase())
  printProducts(result, 'product-wrapper')
})

printOptions(getCategories(products), 'category-select')
