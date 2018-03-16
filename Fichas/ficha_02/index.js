//Media
function funcA(){
    let tamanho = parseInt(prompt("Insira o tamanho do array"))
    let soma = 0
    let array = []
    for(let i = 0; i< tamanho; i++){
        arrai[i]= parseInt(prompt("Insira o " + (i+1) + "º do array"))
        soma = soma + array[i]
    }
    let media = soma/tamanho
    HTMLOutputElement("A média é " + media)
}