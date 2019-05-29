// Armanzenando função dentro da variavel

const imprimirSoma = function (a,b){
    console.log( a + b)
}
imprimirSoma(3,4)

//Armazenando uma função Arrow em uma variavel
const soma = ( a, b) =>{
    return a + b
}
console.log(soma( 2, 3))

//Retorno implicito
const subtracao =(a, b) => a - b
console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal!')

console.log('----------------------------------')

const Pessoa = class {
    falar() {
        return 'Opa!'
    }
}
 
console.log(new Pessoa().falar())