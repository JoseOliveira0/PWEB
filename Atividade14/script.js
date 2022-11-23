function validaDados() {
            
    // usando a posicao no formulario
    if (document.forms.forms.elements.nome.value == "" || document.forms.forms.elements.nome.value.length < 10) {
        alert("Preencha o NOME corretamente!");
        document.forms.forms.elements.nome.focus();
        return false;
    };

    // usando o nome no formulario
    if (document.forms.forms.elements.email.value == "" || document.forms.forms.elements.email.value.indexOf('@') == -1 || document.forms.forms.elements.email.value.indexOf('.') == -1) {
        alert("Preencha o E-MAIL corretamente!");
        document.forms.forms.elements.email.focus();
       return false;
    }

    //usando o nome no formulario  de maneira direta
    if (document.forms.forms.elements.comentario.value == "" || document.forms.forms.elements.comentario.value.length < 20) {
        alert("É necessario preencher a MENSAGEM com no mínimo 20 caracteres!");
        document.forms.forms.elements.comentario.focus();
        return false;
    }

    //radio
    radios = document.getElementsByName("opcoes");
    if (!radios[0].checked && !radios[1].checked) {
        alert("Responda a pesquisa.");
        el.preventDefault();
        return false;
    } else if (radios[0].checked) { // sim
        alert("Obrigado, volte sempre!");
    } else { // não
        alert("Obrigado por retornar!");
    }

    return true;
}