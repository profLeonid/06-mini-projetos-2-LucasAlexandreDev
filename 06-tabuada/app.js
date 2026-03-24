'use strict'

// função que retorna uma lista com todo os números (de acordo com a quantidade do número que o usuário digitar)
const criarListaNumeros = function(quantidade){

    let listaNumeros = []

    for(let i = 0; i <= quantidade; i++){
        listaNumeros.push(i)
    }

    return listaNumeros
}

