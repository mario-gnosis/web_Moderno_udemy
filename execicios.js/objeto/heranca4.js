function MeuObjeto() {

}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()

console.log(obj1._proto_ === obj2._proto_)
console.log(MeuObjeto.prototype === obj1._proto_)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = new MeuObjeto()
obj3._proto_ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo a loucura
console.log((new MeuObjeto)._proto_ === MeuObjeto.prototype)
console.log(MeuObjeto._proto_ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__porto__ === null)