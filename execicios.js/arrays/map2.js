const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasObjeto = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasObjeto)
console.log(resultado)

console.log('-------------------------')
let precos = carrinho.map(e => JSON.parse(e).preco)
console.log(precos)