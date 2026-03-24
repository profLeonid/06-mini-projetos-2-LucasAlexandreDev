'use strict'

// função que retorna uma lista de todos os números até a quantidade limite de acordo com o usuário
const criarListaNumeros = function(quantidade){

    let listaNumeros = []
    
    for(let contador = 1; contador <= quantidade; contador++){
        listaNumeros.push(contador)
    }

    return listaNumeros 
}


// função que retona uma lista de números pares até a quantidade limite de acordo com o usuário
const criarListaPares = function(quantidade){

    let listaNumerosPares = []

    for(let i = 1; i <= quantidade; i++){       
        listaNumerosPares.push(i * 2)   
    }

    return listaNumerosPares
}


// função que retorna uma lista de números impares até a quantidade limite de acordo com o usuário
const criarListaImpares = function(quantidade){

    let listaNumerosImpares = []

    for(let i = 1; i <= quantidade; i++){
        listaNumerosImpares.push( (i * 2) -1)
    }

    return listaNumerosImpares
}

// função que retorna uma lista de números múltiplicativos até a quantidade limite de acordo com o usuário
const criarListaMultiplicativa5 = function(quantidade){

    let listaNumerosMultiplicativo5 = []

    for(let i = 1; i <= quantidade; i++){
        listaNumerosMultiplicativo5.push(i * 5)
    }

    return listaNumerosMultiplicativo5
}

