const notas = [6.7, 8.9, 9.2, 5.4, 7.7]

for(i in notas){
    const elementos = notas[i]
    console.log(i, elementos);
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Julia",
    idade: 23,
    peso: 63
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}