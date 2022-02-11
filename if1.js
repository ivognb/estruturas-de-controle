function notaAluno(nota) {
    if (nota >= 7){
        console.log('Parabéns, você passou com ' + nota);
    }
}

notaAluno(9);

function seForVerdade(valor) {
    if (valor){
        console.log('é verdade...' + valor); // só vai imprimir se tiver algum valor declarado (não vazio), exemplos a baixo
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})