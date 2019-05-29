// Coleção dinamica de pares chaves/valor

const produto = new Object 
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['Marca do produto']
console.log(produto)

console.log('*****************************************')

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //.............
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario'] ['endereco'] ['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.calcularValorSeguro
console.log(carro)
