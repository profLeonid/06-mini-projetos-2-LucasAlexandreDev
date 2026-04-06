'use strict'

/*
Juros do Mês = saldo devedor × (taxa ÷ 100)
Total do Mês = parcela + juros do mês
Saldo Devedor = saldo devedor - parcela
*/

// função que retorna uma lista com todo os meses dependendo da quantidade de parcelas 
const criarListaMes = function(numeroParcela){

    let listaMes = []

    for(let i = 1; i <= numeroParcela; i++){
        listaMes.push(i)
    }

    return listaMes
}


// função que retorna uma lista do valor de cada parcela, com base na quantidade de parcelas 
const criarListaParcela = function(valorTotal, numeroParcela){

    let parcela = valorTotal / numeroParcela
    
    let listaParcela = []
    
    for(let i = 1; i <= numeroParcela ; i++){
        listaParcela.push(parcela)
    }

    return listaParcela
}

// função que retorna uma lista de juros do mês
const criarListaJuros = function(valorTotal, numeroParcela, taxaJuros){
    
    let saldoDevedor = valorTotal
    let parcela      = valorTotal / numeroParcela

    let listaJuros = []

    for(let i = 1; i <= numeroParcela; i++){

        let jurosMes = saldoDevedor * (taxaJuros / 100)
        listaJuros.push(jurosMes)

        saldoDevedor -= parcela
    }

    return listaJuros
}


// função que retorna uma lista total do mês (parcela + juros)
const criarListaTotalMes = function(valorTotal, numeroParcela, taxaJuros){

    let listaTotal = []
    let saldoDevedor = valorTotal
    let parcela = valorTotal / numeroParcela

    for(let i = 1; i <= numeroParcela; i++){

        let jurosMes = saldoDevedor * (taxaJuros / 100)
        let totalMes = parcela + jurosMes

        listaTotal.push(Number(totalMes.toFixed(2)))

        saldoDevedor -= parcela
    }

    return listaTotal
}

// lista saldo devedor
const criarListaSaldoDevedor = function(valorTotal, numeroParcela){

    let saldoDevedor = valorTotal
    let parcela      = valorTotal / numeroParcela

    let listaSaldo = []

    for(let i = 1; i <= numeroParcela; i++){

        saldoDevedor -= parcela

        listaSaldo.push(saldoDevedor)
    }

    return listaSaldo
}

// criar linha da tabela
const criarLinha = function(mes, parcela, juros, total, saldo){

    const tbody = document.getElementById('tbody')
    const tr    = document.createElement('tr')

    const tdMes     = document.createElement('td')
    const tdParcela = document.createElement('td')
    const tdJuros   = document.createElement('td')
    const tdTotal   = document.createElement('td')
    const tdSaldo   = document.createElement('td')

    tdMes.textContent     = mes
    tdParcela.textContent = parcela
    tdJuros.textContent   = juros
    tdTotal.textContent   = total
    tdSaldo.textContent   = saldo

    tr.replaceChildren(tdMes, tdParcela, tdJuros, tdTotal, tdSaldo)

    tbody.appendChild(tr)
}

// função principal (botão)
const handleClick = function(){

    const valorTotal    = Number(document.getElementById('valorTotal').value)
    const numeroParcela = Number(document.getElementById('numeroParcela').value)
    const taxaJuros     = Number(document.getElementById('taxaJuros').value)

    const listaMes     = criarListaMes(numeroParcela)
    const listaParcela = criarListaParcela(valorTotal, numeroParcela)
    const listaJuros   = criarListaJuros(valorTotal, numeroParcela, taxaJuros)
    const listaTotal   = criarListaTotalMes(valorTotal, numeroParcela, taxaJuros)
    const listaSaldo   = criarListaSaldoDevedor(valorTotal, numeroParcela)

    document.getElementById('tbody').replaceChildren()

    for(let i = 0; i < numeroParcela; i++){
        criarLinha(listaMes[i],listaParcela[i],listaJuros[i],listaTotal[i],listaSaldo[i])
    }
}