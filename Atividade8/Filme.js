
               
         var idade = 0;
         var sexo;
         var opiniao;
         var i = 0;
         var countPess = 0;
         var countIdade = 0;
         var countOtimo = 0;
         var countBom = 0;
         var countMulher = 0;
         var countHomem = 0;
         var MediaIdade  = 0;
         var novo = 1000;
         var velho = 0;
         while (i<5)

         {
            i++;

            opiniao = prompt(" De uma nota para o filme onde Ótimo = 4, bom = 3, regular = 2, péssimo = 1.");
            sexo = prompt("Qual o seu sexo ?");
        

            if(sexo == "masculino")
            {
                countHomem = countHomem + 1;

            }

            if(sexo == "feminino")
            {
                countMulher = countMulher + 1;
                
            }

          
            idade = prompt("Qual o sua idade?");

            countIdade = countIdade + idade;

            if(idade < novo)
            {
                novo = idade;

            }

            if (idade > velho)
            {
                velho = idade;

            }

            if(opiniao == "1")
            {
                countPess = countPess + 1;
            }

            if(opiniao == "4")
            {
                countOtimo = countOtimo + 1;
            }

            if(opiniao == "3")
            {
                countBom = countBom + 1;
            }

         }
        
         MediaIdade = countIdade / 5;
         PorcBom = (countBom * 100)/5;
         PorcOtimo = (countOtimo * 100)/5;
         novo = Math.min(novo)
         velho = Math.max(velho)

         alert("Resultado" + 
            "\nMédia da Idade: " + MediaIdade + 
            "\nMais Velho: " + velho +
            "\nMais novo: " + novo +
            "\nQuantidade de Péssimo: " + countPess + 
            "\nPorcentagem de Bom: " + PorcBom + "%" +
            "\nPorcentagem de Ótimo: " + PorcOtimo + "%" +
            "\nQuantidade Mulheres: " + countMulher +
            "\nQuantidade Homens: " + countHomem);





