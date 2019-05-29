function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 455.10))
console.log(criarProduto('iPad', 292.30))