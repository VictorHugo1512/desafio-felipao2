nivelHeroi("remova as aspas e digite aqui o número de vitórias", "aqui digite o número de derrotas, lembrando que é sem as aspas")
function nivelHeroi(vitoria, derrota){
    const saldoVitoria = vitoria - derrota
    let nivel = " "
if(vitoria <= 10){
    nivel = "Ferro"
} else if(vitoria >= 11 && vitoria <= 20){
    nivel = "Bronze"
}  else if(vitoria >= 21 && vitoria <= 50){
    nivel = "Prata"
} else if(vitoria >= 51 && vitoria <= 80){
    nivel = "Ouro"
} else if(vitoria >= 81  && vitoria <= 90){
    nivel = "Diamante"
} else if(vitoria >= 91 && vitoria <= 100){
    nivel = "Ascendente"
} else if(vitoria >= 9001 && vitoria <= 10000){
    nivel = "Lendário"
} else {
    nivel = "Imortal"
} 
console.log(`O herói tem um saldo de ${saldoVitoria} e está no nível ${nivel}`)
}