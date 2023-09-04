function playRockPaperScissor (player1 , player2) {
    if (player1 === player2) {
        return "Empate!";
    } else if (
        (player1 === "Pedra" && player2 === "Tesoura") ||
        (player1 ==="Tesoura" && player2 === "Papel") ||
        (player1 ==="Papel" && player2 === "Pedra")
    ) { return "Jogador 1 venceu!";
} else if (
    (player1 === "Tesoura" && player2 === "Pedra") ||
    (player1 === "Papel" && player2 === "Tesoura") ||
    (player1 === "Pedra" && player2 === "Papel")
) {
    return "Jogador 2 venceu!";
}

}

console.log(playRockPaperScissor(player1 , player2));