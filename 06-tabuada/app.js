'use strict'

// função que retorna uma lista com todo os números (de acordo com a quantidade do número que o usuário digitar)
const criarListaNumeros = function(){
    
    let listaNumeros = []

    for(let i = 0; i <= 10; i++){
        listaNumeros.push(i)
    }

    return listaNumeros
}


// função que retornar uma lista de Adição (quantidade + i)
const criarListaAdicao = function(quantidade){

    let listaAdicao = []

    for(let i = 0; i <= 10; i++){
        listaAdicao.push(quantidade + i)
    }

    return listaAdicao
}

// função que retornar um65a lista de Subtração (quantidade - i)
const criarListaSubtracao = function(quantidade){

    let listaSubtracao = []

    for(let i = 0; i <= 10; i++){
        listaSubtracao.push(quantidade - i)
    }
    return listaSubtracao
}


// função que retornar uma lista de Multiplicação (quantidade * i)
const criarListaMultiplicacao = function(quantidade){

    let listaMultiplicacao = []

    for(let i = 0; i <= 10; i++){
        listaMultiplicacao.push(quantidade * i)
    }

    return listaMultiplicacao
}


// função que retornar uma lista de Multiplicação (quantidade / i)
const criarListaDivisao = function(quantidade){
    
    let listaDivisao = []

    for(let i = 0; i <= 10; i++){
        listaDivisao.push(Number((quantidade / i).toFixed(2)))
    }

    return listaDivisao
}

// função que cria a linha do tbory do HTML
const criarLinha = function(numero, adicao, subtracao, multiplicao, divisao){

    const tbory            = document.getElementById('tbody')
    const tr               = document.createElement('tr') 
    
    const tdNumero         = document.createElement('td')
    const tdAdicao         = document.createElement('td')
    const tdSubtracao      = document.createElement('td')
    const tdMultiplicacao  = document.createElement('td')
    const tdDivisao        = document.createElement('td')

    tdNumero.textContent        = numero
    tdAdicao.textContent        = adicao
    tdSubtracao.textContent     = subtracao
    tdMultiplicacao.textContent = multiplicao
    tdDivisao.textContent       = divisao

    tr.replaceChildren(tdNumero, tdAdicao, tdSubtracao, tdMultiplicacao, tdDivisao)
    
    tbory.appendChild(tr)
}


// função que é chamada pelo onclick do butão, montando a estrutra do tbory com base nas outras funções 
const handleClick = function(){ 
    const quantidade = Number(document.getElementById('quantidade').value) 
    
    const listaNumeros       = criarListaNumeros      (quantidade) 
    const listaAdicao        = criarListaAdicao       (quantidade) 
    const listaSubtracao     = criarListaSubtracao    (quantidade) 
    const listaMultiplicacao = criarListaMultiplicacao(quantidade) 
    const listaDivisao       = criarListaDivisao      (quantidade) 
    
    document.getElementById('tbody').replaceChildren() 
    
    for(let i = 0; i <= 10; i++){ 
        criarLinha(listaNumeros[i], listaAdicao[i], listaSubtracao[i], listaMultiplicacao[i], listaDivisao[i]) 
    } 
}
