//Pessoa -> 123 -> {}
const pessoa = {nome: 'Jão'}
pessoa.nome = 'Mário'
console.log(pessoa.nome)

console.log('--------------')

//pessoa = {nome: 'Ana'}

//freeze congela o objeto pessoa e não permite mais alteração
Object.freeze(pessoa)
pessoa.nome = 'Maria'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Isabel'})
console.log(pessoaConstante)