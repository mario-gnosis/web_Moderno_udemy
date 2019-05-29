const prod1 = {} // objeto

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 983.00
prod1['Desconto legal'] = 0.40

console.log(prod1)

// Objeto é uma coleção de chave e valor
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj2:{
            opaop: 'fui'
        }
    }
}

console.log(prod2)