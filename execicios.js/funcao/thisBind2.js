/*
function Pessoa() {
    this.idade = 0
    const self = this
//Dispara uma outra function de acordo com o intervalo que você passou
    setInterval( function () {
        self.idade ++
        console.log(self.idade)
    }/*.bind(this), 1000) 
}
*/
new Pessoa()

function Pessoa () { 
    this.nome = 'Mário'
    this.idade = 38
    this.funcao = 'Programador'

    const self = this

    setInterval(function() {
      Pessoa ++
        console.log(self.nome + ', idade: ' + self.idade + ', profissão: ' + self.funcao)    
    }, 1000)
}

new Pessoa