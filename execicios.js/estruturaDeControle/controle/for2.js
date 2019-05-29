const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(i, notas[i])
}
console.log('-------------')
const pessoa = {
    nome: 'Mário',
    sobrenome: 'Nunes Lima',
    idade: 38,
    peso: 62
}

for( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log('-------------')

const familia = [
    {nome: 'Mário Nunes Lima', idade: 38, sexo: 'Masculino'},
    {nome: 'Ana Luiza B. Pavani Lima', idade: 36, sexo: 'Feminino'},
    {nome: 'Marronzinho Nego Veio Boca Podi', idade: 4, sexo: 'Macho'}
]

for( let atributo in familia){
    console.log(`${atributo} = ${familia[atributo.nome]}`)
}