const saudacao = 'Olá' // contexto lexico 1

function exec(){
    const saudacao = 'Falaaa' // contexto lexico 2
    return  saudacao
}
// Objetos são grupos aninhados de  pares nome/valor
const cliente = {
    nome: 'Mário',
    idade: 38,
    peso: 64,
    endereco: {
        logradouro: 'R Carilho Videira',
        numero: 15
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

