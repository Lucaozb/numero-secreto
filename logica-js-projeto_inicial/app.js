alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 5000;
let chute ;
let tentativas = 1;

console.log('Valor do chute:', chute);
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

while (chute != numeroSecreto){
    
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    console.log('Resultado da comparação:', chute == numeroSecreto);

    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número é maior que ' + chute);
        }
        tentativas++;
    }
}

let palavratentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}.`);
