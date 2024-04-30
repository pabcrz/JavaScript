const button = document.getElementById('button-form')
let persons = []

button.addEventListener('click', () => {
  event.preventDefault()
  const inputList = document.querySelectorAll('#person-form input')
  const person = {}
  
  inputList.forEach((input) => {
    person[input.name] = input.value
  })
  // persons.push(person) //no crea una nueva referencia
  persons = [...persons, person]
  printPersons(persons, 'persons')
})

const createPerson = ({fullname, email}) => {
  const personItem = document.createElement('li')
  personItem.classList.add('person-item', 'list-group-item')
  const nameCont = document.createElement('h5')
  nameCont.append(fullname)
  const correoCont = document.createElement('p')
  correoCont.append(email)
  
  personItem.append(nameCont, correoCont)
  return personItem
}

const printPersons = (dataArray, wrapperId) => {
  console.log(dataArray)
  const wrapper = document.getElementById(wrapperId)

  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild)
  }

  dataArray.forEach((person) => {
    wrapper.append(createPerson(person))
  }) 
}
