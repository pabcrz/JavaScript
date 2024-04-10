const person1 = {
  name: 'Pablo',
  age: 23,
  height: 1.67,
  gender: 'male',
  alive: true,
  foodType: ['frutas', 'verduras', 'cereales', 'carne'],
  eyes: {
    color: 'brown',
    shape: 'medium'
  },
  sleep: () => console.log('Estoy durmiendo...'),
  eat: function () {
    console.log('Estoy comiendo...')
  },

  propiedadInventada: 'todo bien',
  '45_propiedad-Inventada': 'todo mal'
}
console.log("🚀 ~ person1:", person1)
