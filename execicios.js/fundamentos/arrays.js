const valores = [7.7, 8.9, 10, 3.9, 3.1]
console.log(valores[0], valores[3])
console.log(valores[5])

valores[5] = 11
console.log(valores[5])
console.log(valores.length)

valores.push({id: 3}, false, null, 'Teste')
console.log( valores)

console.log( valores.pop())
console.log( valores)

delete valores[0]
console.log( valores)

console.log( typeof valores)

