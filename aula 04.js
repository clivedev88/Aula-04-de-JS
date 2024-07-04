// Atividade 01
// Crie um código JavaScript que utilize um loop while para contar de 1 a 10 e exibir cada número no console.

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


// Atividade 02
// Crie um código que solicita ao usuário números repetidamente até que ele insira um valor não numérico. O código deve somar os números inseridos e exibir o resultado final.

let soma = 0;
while (true)  {
    let num = Number (prompt ('Digite um número: '));
    soma += num;
    if (isNaN(num)) {
        break
    };
    console.log(soma)
}



// Atividade 03
// Crie um código que gera um número aleatório entre 1 e 10. O código deve pedir ao usuário para adivinhar o número, repetindo o pedido até que o usuário acerte.

const numeroAleatorio = parseInt(Math.random() * 10);
console.log(numeroAleatorio)

while(true) {
    
    let tentativa = Number(prompt('Digite um número de 1 a 10: '))
    
    if (tentativa === numeroAleatorio) {
        console.log('Acertou, miserável!!!')
        break
    }
    else {
        console.log("erroooou!!! Tente de novo!")
    }
}


// Você foi contratado para desenvolver um simulador de caixa eletrônico (ATM) utilizando. Este projeto tem como objetivo aplicar seus conhecimentos sobre loops, condicionais e manipulação de variáveis. O simulador deve permitir que os usuários realizem operações básicas como verificação de saldo, depósito e saque.

// Interface de Usuário:
// O simulador deve exibir um menu com as seguintes opções:
// Ver Saldo / Depositar / Sacar / Sair

// Funcionalidades:

// Ver Saldo: Exibe o saldo atual do usuário.
// Depositar: Permite que o usuário deposite um valor em sua conta. 
// Sacar: Permite que o usuário saque um valor de sua conta, desde que o valor do saque não exceda o saldo disponível. 
// Sair: Encerra o programa.

let saldo = 0
console.log('Bem-vindo!');

while (true) {
    let opcao = Number (prompt("Digite a opção desejada: \n '1' p/ verificar seu saldo;\n '2' p/ depositar um valor;\n '3' p/ sacar um valor;\n '4' p/ SAIR;"));

    console.log(opcao);

    if (opcao === 1) {
        console.log(`Seu saldo é: R$ ${saldo}`)
    }
    else if (opcao === 2) {
        valor_deposito = parseFloat(prompt("Digite o valor que queira depositar: "));
        if (valor_deposito <= 0) {
            console.log('Valor incorreto!!!')
        }
        else {
            saldo += valor_deposito;
            console.log('O seu depósito foi realizado com sucesso.'); 
        }
    }
    else if (opcao === 3) {
        valor_saque = parseFloat(prompt("Digite o valor que queira sacar: "));
        if (valor_saque > saldo) {
            console.log('Saldo insuficiente!!!')
        }
        else {
            saldo -= valor_saque;
            console.log('O seu saque foi realizado com sucesso.') 
        }
    }
    else if (opcao === 4) {
        console.log('Saindo...')
        break
    }
    else {
        console.log('Opção inválida!!!')
    }

}