const pessoa = {
    nome: 'Ana Luiza',
    idade: 36,
    peso: 70,
    nome: 'Mário',
    idade: 38,
    peso: 62
}
console.log(Object.keys(pessoa))
console.log(pessoa)
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

console.log('------------------')
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

console.log('*******************')
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

console.log('--------------------')
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // vai ser lista?
    writable: false, //Via aceitar sem modificada
    value: '01/01/2019'
})
pessoa.dataNascimento = '24/05/1980'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

console.log('*******************')
//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

