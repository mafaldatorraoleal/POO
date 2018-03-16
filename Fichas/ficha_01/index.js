function funcA() {
    console.log("Olá Mundo!")
}

function funcB(){
    let nome ="Mafalda"
    console.log("Olá " + nome + "!")
}

//Calculo da area
function funcC() {
    let comprimento = prompt("escreva o valor do comprimento")
    let altura = prompt("escreva o valor da altura")
    let area = comprimento*altura
    console.log("A área é " + area)
}

//calculadora
function funcD(){
    let valor1 = parseInt(prompt("escreva o primeiro valor"))
    let valor2 = parseInt(prompt("escreva o segundo valor"))
    let operacao = prompt("escreva a operação que pretende efetuar")
    switch(operacao){
        case "+": console.log(`O resultado é  ${valor1 + valor2}`);break
        case "-": console.log(`O resultado é  ${valor1 - valor2}`);break
        case "*": console.log(`O resultado é  ${valor1 * valor2}`);break
        default: console.log(`O tipo de cálculo não é reconhecido`);break
        
    }
}

//calculadora de IMC
function funcE(){
    let peso = parseInt(prompt("Qual é o seu peso? (em kg)"))
    let altura = parseInt(prompt("Qual é a sua altura? (em m)"))
    let imc = peso/(altura*altura)
    
    if (imc < 18,5){
        console.log(`Você está abaixo do peso aconselhado. O seu IMC é ${imc}`)
    }
    else if (imc >= 18,5  &&  imc < 24,9){
        console.log(`Você está com um peso normal. O seu IMC é ${imc}`)
    }
    else if (imc >= 24,9  &&  imc < 29,9){
        console.log(`Você está com sobrepeso. O seu IMC é ${imc}`)
    }
    else if (imc >= 29,9  &&  imc < 34,9){
        console.log(`Você está com obesidade grau I. O seu IMC é ${imc}`)
    }
    else if (imc >= 34,9  &&  imc < 39,9){
        console.log(`Você está com obesidade grau II. O seu IMC é ${imc}`)
    }
    else {
        console.log(`Você está com obesidade grau III ou mórbida. O seu IMC é ${imc}`)
    }

}

//ECOOO 
function funcF(){
    let palavra = prompt("Escreva a palavra que pretende ecoar")
    let num_de_eco = parseInt(prompt("Escreva o número de vezes que pretende ecoar a palavra"))
    for (let i=1; i <= num_de_eco; i++ ){
        console.log(palavra)
    }
}

//apresenta intrevalo
function funcG(){
    let num1 = parseInt(prompt("Escreva o 1º número"))
    let num2 = parseInt(prompt("Escreva o segundo número"))

    for (i = num1; i<num2; i++){
        console.log(i)
    }
}

//tabuada
function funcH(){
    let num = parseInt(prompt("Qual é o número que pretende?"))

    for(let i=0; i<11; i++){
        console.log(num*i)
    }
}

//divisores de 3
function funcI(){
    let n1 = parseInt(prompt("Qual é o primeiro número?"))
    let n2 = parseInt(prompt("Qual é o segundo número?"))
    let soma = 0

    for (let i=n1; i<=n2; i++){
        if(i % 3 == 0){
            soma = soma + i
        }
    }
    console.log(`O resultado da soma dos multiplos de 3 é ${soma}`)
}

//primos
function funcJ(){
    let n = parseInt(prompt("Qual o número que pretende verificar se é primo?"))
    let primo = true

    for( let i = 2; i < n; i++)
    {
        if(n % i == 0){
           primo = false
        }
    }
    let result = primo ? "sim" : "não"
    console.log(result)
}

//fatorial
function funcK(){
    let num = parseInt(prompt("Qual é o número que pretende?"))
    let fatorial = 1; 
    if(num == 0 || num == 1){
        fatorial = 1
    }
    else if(num < 0){
        console.log("Valor tem de ser maior ou igual a 0!")
    }
    else{
        
        for(let i = 1; i <= num; i++){
             fatorial = fatorial * i
        }
    }
    console.log(`O fatorial é ${fatorial}`)
}

//perfeitos
function funcL(){
    let num = parseInt(prompt("Qual é o número que pretende?"))
    let divisores = 0
    for( let i = num - 1; i > 0; i--){
        if(num % i == 0){
            divisores = divisores + i
        }
    }

    if( divisores == num){
        console.log(`SIM`)
    }
    else{
        console.log(`NÃO`)
    }
}

//ano bissexto
function funcM(){
    let year = parseInt(prompt("Qual é o ano?"))
    let bissexto = false
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
    {
        bissexto = true
    }
    let result = bissexto ? "SIM" : "NÃO"
    console.log(result)
}

//capicua
function funcN(){
    let num = parseInt(prompt("Qual é o numero?"))
    let capicua = false

    if (num.charAt(0) == num.charAt(2) ) {
        console.log("SIM")
    } else {
        console.log("NÃO")
    }        
}

//jogo
function funcO(){
    let numero_random = Math.floor((Math.random()*99)+1)
    let tentativas = 0

    do{
        let numero_utilizador = parseInt(prompt("Escreva um numero?"))

        if(numero_utilizador > numero_random){
            console.log(`PARA BAIXO`)
        }
        else if(numero_utilizador < numero_random){
            console.log(`PARA CIMA`)
        }
        else{
            break
        }
        tentativas++
    }
    while(tentativas < 5);

    if( tentativas < 5){
        console.log(`ADIVINHOU PARABÉNS!`)
    }
    else{
        console.log(`PACIÊNCIA, JOGUE OUTRA VEZ!`)
    }
}
