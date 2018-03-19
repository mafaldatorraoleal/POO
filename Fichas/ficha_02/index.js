//Media
function funcA(){
    let tamanho = parseInt(prompt("Insira o tamanho do array"))
    let soma = 0
    let array = []
    for(let i = 0; i< tamanho; i++){
        array[i]= parseInt(prompt("Insira o " + (i+1) + "º elemento do array"))
        soma = soma + array[i]
    }
    let media = soma/tamanho
    console.log("A média é " + media)
}

//Menor
function funcB(){
    let tamanho = parseInt(prompt("Insira o número de elementos do array pertendido"))
    let menor = 1000000
    let x = 0
    let array = []
    for (let i = 0; i< tamanho; i++){
        array[i]= parseInt(prompt("Insira o " + (i+1) + "º elemento do array"))
        x = array[i]
        
        if(menor >= x){
            menor = x
        }
    }
    console.log(`O menor número do array é ${menor}`)
}