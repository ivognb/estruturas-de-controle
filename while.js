function getRandomInt(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // while é uma expressão de repeticão propria pra executar laços (while(true)) vai fazer algo até o valor ser falso
    opcao = getRandomInt(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`);
}

console.log("Fim da repetição");