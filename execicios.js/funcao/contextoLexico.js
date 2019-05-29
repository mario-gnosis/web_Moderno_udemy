const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exect (){
    const valor = 'local'
    minhaFuncao()
}

exect()