console.log(Math.ceil(6.1))

const objt1 = {}

objt1.nome = 'Bola'
console.log(objt1.nome)
objt1['nome'] = 'Bola quadrada'
console.log(objt1.nome)

function Obj (nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec....')
    }
}

const Obj2 = new Obj('Cadeira')
const Obj3 = new Obj('Mesa')
console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()