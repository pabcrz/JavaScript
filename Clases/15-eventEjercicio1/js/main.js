const checkboxes = document.querySelectorAll('.checkbox') //entraga una node list
const elements = document.querySelectorAll('.element')
// const elementsAndBoxes = [allCheckboxes, allElements]

// console.log(elementsAndBoxes)

/* const forma1 = allCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const target =  document.querySelector(checkbox.getAttribute('data-target'))
    checkbox.checked ? target.classList.add('d-none') : target.classList.replace('d-none', 'd-block')
  })
})  */

checkboxes.forEach((checkbox, index) => {
  checkbox.setAttribute('data-target-index', index)
  checkbox.addEventListener('change', (event) => {
    let elementIndex = event.target.dataset.targetIndex
    console.log(event)
    console.log(event.target.dataset.targetIndex)
    event.target.checked
      ? elements[elementIndex].classList.add('d-none')
      : elements[elementIndex].classList.remove('d-none')
  })
})
