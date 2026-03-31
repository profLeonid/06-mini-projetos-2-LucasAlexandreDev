'use strict'

/*
Parcela = valor total ÷ número de parcelas (calculada antes do loop, é fixa)
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