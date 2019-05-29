const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log("o peso1 é inteiro: ", Number.isInteger(peso1))
console.log("o peso2 é inteiro: ", Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.873

const total= avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log("Média: ", media)
console.log("Média: ", media.toFixed(2))
console.log("Converter valor em: ", media.toString()) // mostra valor original por ser constante
console.log("Converter valor em: ", media.toString(2)) // converte em binário
console.log(typeof media)

//Alguns cuidados que se tem que ter
console.log("10" / 2)
console.log("Show" * 2)
//console.log(10.toString())
console.log((10.345).toFixed(2))