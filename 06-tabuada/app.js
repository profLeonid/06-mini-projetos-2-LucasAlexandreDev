'use strict'

// função que retorna uma lista com todo os números (de acordo com a quantidade do número que o usuário digitar)
const criarListaNumeros = function(quantidade){

    let listaNumeros = []

    for(let i = 0; i <= quantidade; i++){
        listaNumeros.push(i)
    }

    return listaNumeros
}


// função que retornar uma lista de Adição (de acordo com a quantidade do número que o usuário digitar)
const criarListaAdicao = function(quantidade){

    let listaAdicao = []

    for(let i = 1; i <= quantidade; i++){
        listaAdicao.push(i + quantidade)
    }

    return listaAdicao
}

// função que retornar uma lista de Subtração (de acordo com a quantidade do número que o usuário digitar)
const criarListaSubtracao = function(quantidade){

    let listaSubtracao = []

    for(let i = 1; i <= quantidade; i++){
        listaSubtracao.push(i- 1)
    }
    return listaSubtracao
}
