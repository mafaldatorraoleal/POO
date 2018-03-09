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
