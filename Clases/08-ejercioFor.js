const users = [
  {
    name: 'Alice',
    lastname: 'Johnson',
    age: 28,
    gender: 'Female',
    country: 'USA'
  },
  {
    name: 'Bob',
    lastname: 'Smith',
    age: 32,
    gender: 'Male',
    country: 'Canada'
  },
  {
    name: 'Carlos',
    lastname: 'Gomez',
    age: 24,
    gender: 'Male',
    country: 'Mexico'
  },
  {
    name: 'Daniela',
    lastname: 'Martinez',
    age: 30,
    gender: 'Female',
    country: 'Colombia'
  },
  {
    name: 'Erik',
    lastname: 'Svensson',
    age: 29,
    gender: 'Male',
    country: 'Sweden'
  },
  {
    name: 'Fiona',
    lastname: "O'Donnell",
    age: 35,
    gender: 'Female',
    country: 'Ireland'
  },
  {
    name: 'Gautam',
    lastname: 'Patel',
    age: 27,
    gender: 'Male',
    country: 'India'
  },
  {
    name: 'Hana',
    lastname: 'Kim',
    age: 22,
    gender: 'Female',
    country: 'South Korea'
  },
  {
    name: 'Ivan',
    lastname: 'Petrov',
    age: 34,
    gender: 'Male',
    country: 'Russia'
  },
  {
    name: 'Julia',
    lastname: 'Santos',
    age: 25,
    gender: 'Female',
    country: 'Brazil'
  }
]

/*
    1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
    2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
    3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
    4.- Necesitamos saber la edad promedio de los usuarios
    5.- Necesitamos saber la mayor edad
    6.- Necesitamos saber la menor edad
*/

const printUsers = (usersToPrint) => {
  console.log('Users are: ')
  for (i= 0; i< usersToPrint.length; i++){
    console.log(i+1 + '. ' + usersToPrint[i])
  }
  return
}

/* 1. Lista con nombres completos 
1. acceder a cada elemento y obetener nombre y apellido
1.1 para acceder tengo que ubicarme en una posicion 
1.2 unir los valores name y lastname
1.3 agregar los nombres al arreglo usersNames*/

const fullName = (users) => {
  const usersNames =[]
  for (i = 0; i < users.length; i++) {
    const fullName = users[i].name + ' ' + users[i].lastname
    usersNames.push(fullName)
  }
  printUsers(usersNames)
  return usersNames
}

// console.log(fullName(users))
fullName(users)

/* 2. Lista unicamente con usuarios 'male' 
1. crear un array para guardar los usuario male
2. crear una condicion para filtrar los usuarios male
3. extrear name y last name
4. agregarlos al array usersMale*/

const usersMale = (users) => {
  const usersMale = []
  for (i = 0; i < users.length; i++) {
    if (users[i].gender === 'Male') {
      const fullName = users[i].name + ' ' + users[i].lastname
      usersMale.push(fullName)
    }
  }
  printUsers(usersMale)
  return usersMale
}

// console.log(usersMale(users))
usersMale(users)

/* 3. Lista unicamente con usuarios 'female' 
1. crear un array para guardar los usuario female
2. crear una condicion para filtrar los usuarios female
3. extrear name y last name
4. agregarlos al array usersFemale*/

const usersFemale = (users) => {
  const usersFemale = []
  for (i = 0; i < users.length; i++) {
    if (users[i].gender === 'Female') {
      const fullName = users[i].name + ' ' + users[i].lastname
      usersFemale.push(fullName)
    }
  }
  printUsers(usersFemale)
  return usersFemale
}

// console.log(usersFemale(users))
usersFemale(users)

/* 4. Edad promedio de los usuarios
1. crear variable average
2. extrear la edad de cada usuario
3. guardar la edad en un array
4. calcular el promedio */

const ageAverage = (users) => {
  let average = 0
  for (i = 0 ; i < users.length ; i++){
    const age = Number(users[i].age)
    average = average+age
  }
  return 'El promedio es: ' + average/users.length
}

console.log(ageAverage(users))