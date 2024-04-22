const canes = [
  {
    nombre: 'Rex',
    tipo: 'Perro',
    edad: 4,
    vacunado: true,
    direccion: {
      calle: 'Calle del Parque',
      numero: 23,
      colonia: 'San José',
      codigoPostal: 78900
    }
  },
  {
    nombre: 'Bella',
    tipo: 'Perro',
    edad: 6,
    vacunado: true,
    direccion: {
      calle: 'Avenida Libertad',
      numero: 56,
      colonia: 'El Bosque',
      codigoPostal: 78500
    }
  },
  {
    nombre: 'Max',
    tipo: 'Perro',
    edad: 3,
    vacunado: false,
    direccion: {
      calle: 'Callejón del Puente',
      numero: 12,
      colonia: 'Villa Hermosa',
      codigoPostal: 78850
    }
  },
  {
    nombre: 'Rocky',
    tipo: 'Perro',
    edad: 2,
    vacunado: false,
    direccion: {
      calle: 'Camino Real',
      numero: 34,
      colonia: 'Las Palmas',
      codigoPostal: 78600
    }
  }
]

const transformData = (dogs) => {
  const newData = {
    vacunados: [],
    noVacunados: []
  }
  dogs.forEach((dog) => {
    if (dog.vacunado) newData.vacunados = [...newData.vacunados, dog]
    else newData.noVacunados = [...newData.noVacunados, dog]
  })
  console.log(newData)
}

transformData(canes)