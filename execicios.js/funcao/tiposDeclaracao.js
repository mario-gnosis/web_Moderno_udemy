console.log(soma(6, 5))

// function declaration ----dessa forma o sistema primeiro carrega toda a função antes de executa-lá,
// por isso pode ser chamada antes da função
function soma (x, y) {
    return x + y
} 

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(6, 5))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(6, 5))