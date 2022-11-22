var Aluno1 = new Object();
Aluno1.RA = 1;
Aluno1.nome = "José Oliveira";

	document.write("<h3>Aluno 1</h3>");
	document.write("<p>RA: " + Aluno1.RA + "</p>");
	document.write("<p>Nome: " + Aluno1.nome + "</p>");


var Aluno2 = {}; 
Aluno2['RA'] = 7;
Aluno2['nome'] = "Jaylen Brown";
document.write("<br><h3>Aluno 2</h3>");
document.write("<p>RA: " + Aluno2.RA + "</p>");
document.write("<p>Nome: " + Aluno2.nome + "</p>");


var Aluno3 = {
RA: 0,
nome: "Jason Tatum"
};

	document.write("<br><h3>Aluno 3</h3>");
	document.write("<p>RA: " + Aluno3.RA + "</p>");
	document.write("<p>Nome: " + Aluno3.nome + "</p>");


