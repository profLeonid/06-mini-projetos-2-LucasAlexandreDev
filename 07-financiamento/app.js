'use strict'

/*
Juros do Mês = saldo devedor × (taxa ÷ 100)
Total do Mês = parcela + juros do mês
Saldo Devedor = saldo devedor - parcela
*/

// função que retorna uma lista com todo os meses dependendo da quantidade de parcelas 
const criarLinhaMes = function(numeroParcela){

    let listaMes = []

    for(let i = 1; i <= numeroParcela; i++){
        listaMes.push(i)
    }

    return listaMes
}


// função que retorna uma lista do valor de cada parcela, com base na quantidade de parcelas 
const criarParcela = function(valorTotal, numeroParcela){

    let parcela = valorTotal / numeroParcela
    
    let listaParcela = []
    
    for(let i = 1; i <= numeroParcela ; i++){
        listaParcela.push(parcela)
    }

    criarJurosMes(listaParcela)

    return listaParcela

}


// const criarJurosMes = function(valorTotal, numeroParcela, taxaJuros){

//     let saldoDevedor = valorTotal - numeroParcela
//     let jurosMes     =  saldoDevedor * (taxaJuros / 100)
    
//     let listaJurosMes = []

//     for(let i = 1; i < numeroParcela; i++){
//         listaJurosMes.push(jurosMes)
//     }

//     return listaJurosMes
// }

// criarJurosMes(100, 20, 2)