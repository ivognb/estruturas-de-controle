function getRandomInt(min, max) {
    const valor = Math.random() * (max - min) + (min)
    return Math.floor(valor)
}

let opcao = 0

    do {
        opcao = getRandomInt(-1,10)
        console.log(`A opção escolhida foi ${opcao}`);
    } while (opcao != -1)

    console.log("Fim da repetição");

    // Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao