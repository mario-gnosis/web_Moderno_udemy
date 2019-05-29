function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * ( 1 - this.desc) * ( 1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 569, desc: 0.2}
console.log(getPreco.call(carro)) // call - sempre executa todos os parametros passado
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))

console.log('**********************************')

const vamosNessa = {
    nome: 'Opa..e ai?',
    dia: 'sexta-feira'
}

console.log(vamosNessa.nome)
