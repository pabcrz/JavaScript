const createKoderItem = (koderObject) => {
  let {name, lastname} = koderObject
  let koderFullName = `${name} ${lastname}`

  let koderListItem = document.createElement('li')
  koderListItem.classList.add('list-group-item')
  let koderItemText = document.createTextNode(koderFullName)
  koderListItem.append(koderItemText)

  return koderListItem
}

const printKodersList = (kodersArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId)
  kodersArray.forEach((koder) => {
    let koderItem = createKoderItem(koder)
    wrapper.append(koderItem)
    console.log(koderItem)
  })
}

printKodersList(koders, )