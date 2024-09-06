function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dadosPetshop) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <dialog id="modal-${dado.pet.nome}">
                <h2>${dado.pet.nome} - ${dado.tutor.nome}</h2>
                <p>${dado.historico["0"]}</p>
            </dialog>

            <div class="item-resultado" onclick="abrirModal('modal-${dado.pet.nome}')">
                <h2>${dado.pet.nome} - ${dado.tutor.nome}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.showModal();
}