// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

//  Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // pegando o campo que quero duplicar

    // limpar os campos. QUe campos?
    const fields = newFieldContainer.querySelectorAll('input'); //pega todas as tags inputs da tag
    
    //para cada campo limpar
    fields.forEach(function (field) {
        // pega o field do momento e o limpa
        field.value = ""
    })

    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

// usamos o node sempre para se referir a uma tag HTML
