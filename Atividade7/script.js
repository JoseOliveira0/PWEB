
let usuario;
let computador = Math.floor(Math.random() * 3);;


usuario = prompt("Digite: pedra | papel | tesoura");

if (usuario == "pedra" && computador == 0)
{
    alert("O computador escolheu Pedra. Foi um empate!");
    

}

else if (usuario == "pedra" && computador == 1)
{
    alert("O computador escolheu Papel. Você Perdeu!");

}

else if (usuario == "pedra" && computador == 2)
{
    alert("O computador escolheu Tesoura. Você Ganhou!");

}

else if (usuario == "papel" && computador == 0)
{
    alert("O computador escolheu Pedra. Você Ganhou!");

}

else if (usuario == "papel" && computador == 1)
{
    alert("O computador escolheu papel. Foi um empate!");

}

else if (usuario == "papel" && computador == 2)
{
    alert("O computador escolheu Tesoura. Você perdeu!");

}

else if (usuario == "tesoura" && computador == 0)
{
    alert("O computador escolheu pedra. Você perdeu!");

}

else if (usuario == "tesoura" && computador == 1)
{
    alert("O computador escolheu papel. Você Ganhou!");

}

else if (usuario == "tesoura" && computador == 2)
{
    alert("O computador escolheu Tesoura. Foi um empate!");

}