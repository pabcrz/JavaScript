/* 

Guardar el Número de Órdenes y el Día del Mes: Declarar variables para almacenar el número total de órdenes recibidas en un día y el día del mes actual.

Determinar si el Día es Par o Impar: Utilizar operadores y estructuras de control para verificar si el día del mes es par o impar, ayudando a Carlos a confirmar sus sospechas sobre la demanda.

Comparar la Demanda con las Expectativas: Carlos te proporcionará un número previsto de órdenes. El programa debe comparar el número real de órdenes con este número previsto.

Ajuste de Capacidad del Restaurante: Basándose en la comparación, el programa decidirá si es necesario incrementar o reducir la capacidad del restaurante para el siguiente día.

Alertas Específicas para Días Impares con Alta Demanda: En caso de que el día sea impar y la cantidad de órdenes supere la prevista, el programa deberá alertar a Carlos, indicando que es probable una mayor demanda al día siguiente.

Bonus - Cálculo de Proporción de Órdenes Cumplidas: Por último, el programa calculará y mostrará la proporción del número de órdenes cumplidas respecto al número previsto, utilizando operadores aritméticos.

*/

const dayEvenOdd = () => {
  const date = new Date()
  const dayMonth = date.toLocaleString({ day: 'numeric' })
  const dayToNumber = Number(dayMonth)
  const isEvenOrOdd = dayToNumber % 2
  if (isEvenOrOdd === 0) console.log('Hoy es un dia par.')
  else console.log('Hoy es un dia impar.')
return isEvenOrOdd
}

const increaseCapacity = (orders, expected) => {
  let increase = false
  if (orders > expected) {
    console.log('Las ordenes superaron lo previsto, incrementa tu capacidad.')
    return increase = true
  }
  else if (orders < expected) {
    console.log('Las ordenes NO superaron lo previsto, reduce tu capacidad.')
    return increase
  } else console.log('Vendiste todas las ordenes.')
}

const efficiency = () => console.log('La eficiencia es de: ' + ((orders * 100) / expectedOrders) + '%')

const orders = 700
const expectedOrders = 500

const principal = () => {
  // Evaluo si las ordenes superaron o No. se indica que accion debe tomar
  const capacity = increaseCapacity(orders, expectedOrders)
  // Despues le decimos si hoy es dia par o impar
  const dia = dayEvenOdd()
  
  if (dia === 1 && capacity === true){
    console.log('Es probable una mayor demanda mañana.')
  }
  efficiency()
}
principal()