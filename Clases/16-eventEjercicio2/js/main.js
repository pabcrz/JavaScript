/*   1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:
  person = {
    name:"...",
    email:"...",
    password:"..."
  } 
1. Crear un evento de click al boton (agregar un event linstener)
2. Crear u objeto al suceder el evento

  */

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

/*   2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"
   persons = []
  person -> persons 
1. Crear fuera de la funcion una lista persons=[]
2. Agregar el objeto obtenido a la lista cuando se de click
*/

/*   3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario 
1. Crear un contenedor para agregar al usuario
2. Crear la estructura que tendra el usuario
3. Cuando suceda el evento click pintar al usuario en HTML
3.1 Si tengo una lista de objetos, tengo que recorrer cada elemento y obtener los datos para pintarlos en html*/
