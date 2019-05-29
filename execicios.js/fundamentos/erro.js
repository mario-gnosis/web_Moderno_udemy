const obj = {nome: 'Ana Luiza'}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('Chegou ao final')
    }   
}
function tratarErroELancar(erro){
    //  throw new Error('Ocorreu um erro, estamos analisando o motito...aguarde por favor!')
    //throw 501
    //throw 'Deu erro...sujou!'
    throw{
        nome: erro.nome,
        msg: erro.message,
        date: new date
    }
  }
  imprimirNomeGritado(obj)