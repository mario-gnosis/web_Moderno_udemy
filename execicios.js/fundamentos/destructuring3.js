function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
// gera valores aleatórios entre 40 e 50
console.log(rand({ max: 50, min: 40 }))

const obj = {max: 50, min: 40}
console.log(rand(obj))

//objeto vazio
console.log(rand({}))
