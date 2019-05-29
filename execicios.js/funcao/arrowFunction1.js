let dobro = function (a) {
    return 2 * a 
}

dobro = (a) => {
    return 2 * a
}
 dobro = a => 2 * a // return  implícito
 console.log(dobro(Math.PI))
 console.log(dobro(10))

 let ola = function () {
     return 'Olá'
 }

 ola = () => 'Olá'
 console.log(ola())
 ola = _ => 'Oi' //Possui um param
 console.log(ola())