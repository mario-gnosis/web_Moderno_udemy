
/*for(let i = 0; i < 10; i++){
    console.log(i)
}
console.log("Valor de i = ", i)

*/
console.log("*********************")

const funcs = []
for(let i = 0; i < 10; i++){
    console.log("Função no array interno", i)
    funcs.push(function(){
        console.log("Adicionando função no array ", i)
    })
}
funcs[2]()
funcs[6]()