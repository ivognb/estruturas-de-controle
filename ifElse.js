const imprimirResultado = function (nota) {
    if (nota >= 7) { // se a nota for maior que 7:
        console.log('Aprovado');    
    } else { // caso a nota NÃO for maior que 7
        console.log('Reprovado');
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') // cuidado!! por conta do js ser uma linguagem fracamente tipada, não vai dar erro no console