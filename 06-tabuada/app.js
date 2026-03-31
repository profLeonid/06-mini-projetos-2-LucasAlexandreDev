'use strict'

// função que retorna uma lista com todo os números (de acordo com a quantidade do número que o usuário digitar)
const criarListaNumeros = function(quantidade){

    let listaNumeros = []

    for(let i = 0; i <= quantidade; i++){
        listaNumeros.push(i)
    }

    return listaNumeros
}


// função que retornar uma lista de Adição (quantidade + i)
const criarListaAdicao = function(quantidade){

    let listaAdicao = []

    for(let i = 1; i <= quantidade; i++){
        listaAdicao.push(quantidade + i)
    }

    return listaAdicao
}


// função que retornar uma lista de Subtração (quantidade - i)
const criarListaSubtracao = function(quantidade){

    let listaSubtracao = []

    for(let i = 1; i <= quantidade; i++){
        listaSubtracao.push(quantidade - i)
    }
    return listaSubtracao
}


// função que retornar uma lista de Multiplicação (quantidade * i)
const criarListaMultiplicacao = function(quantidade){

    let listaMultiplicacao = []

    for(let i = 1; i < quantidade; i++){
        listaMultiplicacao.push(quantidade * i)
    }

    return listaMultiplicacao
}


// função que retornar uma lista de Multiplicação (quantidade / i)
const criarListaDivisao = function(quantidade){
    
    let listaDivisao = []

    for(let i = 1; i < quantidade; i++){
        listaDivisao.push(Number((quantidade / i).toFixed(2)))
    }

    return listaDivisao
}
