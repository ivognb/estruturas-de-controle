function teste1(num) {
    if (num > 7) 
    // por mais que esteja identado, somente a sentença de codigo (num) esta associada ao if, pra resolver isso só usar {}
        console.log(num);
    // independente do resultado do if, o final sempre vai ser executado pois não está associado ao if
        console.log('Final');
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { // cuidado com o ; NÃO usar com as estruturas de controle
        console.log(num);
    }
}

teste2(5)
teste2(8)