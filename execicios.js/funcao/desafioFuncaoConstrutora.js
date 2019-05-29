
function PessoaFisica(nome) {
    this.nome = nome

   this.diz = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p = new PessoaFisica('Ana Luiza B P Lima')
p.diz()
console.log(p.nome)