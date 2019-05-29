const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callBack
const notasBaixas1 = [] 

for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)
console.table(notasBaixas1)

//Com callBack
const notasBaixas2 = notas.filter( function (notas) {
    return notas < 8
})
console.table(notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas < 7 ) 
console.table(notasBaixas3)

const notasMenor = notas => notas < 5
const notasBaixas4 = notas.filter(notasMenor)
console.log(notasBaixas4)