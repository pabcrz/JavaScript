let productsArray = [
  {
    name: ''
  }
]

const printProductInputs = () => { 
  let form = document.getElementById('products-form')
  form.innerHTML = ''
  productsArray.forEach((product, idex) =>{
    let currentInputs = form.innerHTML
    form.innerHTML = currentInputs +
  })
}