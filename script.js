let idade = 20
let humano = true

if(idade > 18){
    console.log("Você e maior que 18 anos ")

}

if(idade > 18 || fumano){
    console.log(idade, humano)

}
 
let mes = "Fevereiro"

if(mes=== "Dezembro" || mes=== "janeiro"){
    console.log("Seu aniversário é em dezembro ou Janeiro")

} else{
    console.log("Seu aniversário não é em Dezembro ou Janeiro")

}

let name = "Vinicyus"
let sobrenome = "Mascarenhas"

if(name.substring(0.1) === "R"){
    console.log("Seu nome começa com a letra R")
}else{
    console.log("Seu nome não começa com a letra R")
}


if(sobrenome.length < 6){
    console.log( "Seu sobrenome tem 6 letras")
}else{
    console.log("Seu sobrenome tem mais de 6 letras")
}



if(sobrenome.length < 6 || sobrenome.substring(0.1) === "E"){
    console.log("Seu sobrenome começa com a letra E ou tem 6 letras")
}else{
    console.log("Seu sobrenome não começa coma a letra E e tem mais de 6 letras")
}