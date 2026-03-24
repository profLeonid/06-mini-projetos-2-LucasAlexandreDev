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


const criarListaPotencia2 = function(quantidade){

    let listaNumerosPotencia2 = []

    for(let i = 0; i <= quantidade; i++){
        listaNumerosPotencia2.push(2 ** i)
    }

    return listaNumerosPotencia2
}

// função que cria a linha do tbory do HTML
const criarLinha = function(numero, par, impar, multiplicativo, potencia){

    const tbory            = document.getElementById('tbody')
    const tr               = document.createElement('tr') 
    
    const tdNumero         = document.createElement('td')
    const tdPar            = document.createElement('td')
    const tdImpar          = document.createElement('td')
    const tdMultiplicativo = document.createElement('td')
    const tdPotencia       = document.createElement('td')

    tdNumero.textContent         = numero
    tdPar.textContent            = par
    tdImpar.textContent          = impar
    tdMultiplicativo.textContent = multiplicativo
    tdPotencia.textContent       = potencia

    tr.replaceChildren(tdNumero, tdPar, tdImpar, tdMultiplicativo, tdPotencia)
    
    tbory.appendChild(tr)
}


// função que é chamada pelo onclick do butão, montando a estrutra do tbory com base nas outras funções
const handleClick = function(){

    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros                = criarListaNumeros        (quantidade) 
    const listaNumerosPares           = criarListaPares          (quantidade) 
    const listaNumerosImpares         = criarListaImpares        (quantidade) 
    const listaNumerosMultiplicativo5 = criarListaMultiplicativa5(quantidade) 
    const listaNumerosPotencia2       = criarListaPotencia2      (quantidade) 

    document.getElementById('tbody').replaceChildren()

    for(let i = 0; i < quantidade; i++){
        criarLinha(listaNumeros[i], listaNumerosPares[i], listaNumerosImpares[i], listaNumerosMultiplicativo5[i], listaNumerosPotencia2[i])
    }
}
