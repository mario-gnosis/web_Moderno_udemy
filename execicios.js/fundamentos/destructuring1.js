//Novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// as chaves depois do const representa um operador de desestruturação
const {nome, idade } = pessoa
console.log(nome, idade)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// caso queira mudar os nomes faz assim
const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada )