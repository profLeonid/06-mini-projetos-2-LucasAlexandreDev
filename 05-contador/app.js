'use strict'

// função que retorna uma lista de todos os números até a quantidade limite de acordo com o usuário
const criarListaNumeros = function(quantidade){

    let listaNumeros = []
    
    for(let contador = 1; contador <= quantidade; contador++){
        listaNumeros.push(contador)
    }

    return listaNumeros 
}