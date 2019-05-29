console.error("Erro aqui!")
console.warn("Aviso")


const user = [{
 id: 1,
name: 'Mário',
picture: 'https://www.infoq.com/images/profiles/ZiYbH2R4zcrCFPFAEfigYPc6va0WSJ4Q.jpg',
logged: true
}, {
id: 2,
name: 'Ana Luiza',
picture: 'profile.png',
logged: false
}
];

console.table(user)

console.time("Tempo")
for(let i in user){
    console.count("Contagem")
    console.timeLog("Tempo")
    console.log(user[i])
    console.assert(user[i].logged, "Deslogado!")
/*
    if (i == 1){
        console.countReset("Contagem")
    }
    */
    }
    console.timeEnd("Tempo")

    console.log("%cMensagem!", "color: blue; background-color: purple; font-size: 20px; padding:10px; margin: 10px")