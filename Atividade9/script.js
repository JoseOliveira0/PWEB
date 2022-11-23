 let maiornum = function(...args)
 {
    return Math.max.apply(null,args.sort(function(a,b){return a - b}));
 }

 let ordemnum = function(...args)
 {
     return args.sort(function(a,b){return a - b});
 }

let num1,num2,num3;

num1 = Number(prompt("Digite o primeiro número: "));

num2 = Number(prompt("Digite o segundo número: "));

num3 = Number(prompt("Digite o terceiro número: "));

document.write("<h2>O maior número é: </h2>" + maiornum(num1,num2,num3))
document.write("\n<h2>O array em ordem crescente é: </h2>" + ordemnum(num1,num2,num3));