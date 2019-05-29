let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
console.log(produto.preco)

produto.preco = undefined // evite atribuir
console.log(produto)
console.log(!!produto.preco)

produto.preco = null // sem preço
console.log(produto.preco)









