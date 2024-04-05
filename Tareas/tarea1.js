var fruta = 'manzana'
function comer() {
  var fruta = 'banana'

  function lavar() {
    console.log('Lavando ' + fruta)
    console.log('lavando ' + window.fruta)
  }
  lavar()
}
comer()
