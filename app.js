function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dadosPetshop) {
        let ultimoServico;

        // Verificar se o pet tem serviços
        if (dado.servicos.length > 0) {
            ultimoServico = dado.servicos[dado.servicos.length - 1];
        }

        if (dado.clubinho == true) {
            clubinho = "✔";
        }else{
            clubinho = "X";
        }

        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <dialog id="modal-${dado.pet.nome}">
                <button onclick="fecharModal(this)">Fechar</button>
                <h2>${dado.pet.nome} - ${dado.tutor.nome}</h2>
                <div class="row">
                    <div class="col"><h3>Pet: ${dado.pet.nome}</h3></div>
                </div>
                <div class="row">
                    <div class="col-3">Raça: ${dado.pet.raca}</div>
                    <div class="col-3">Cor: ${dado.pet.cor}</div>
                    <div class="col-3">Tamanho: ${dado.pet.tamanho}</div>
                </div>
                <div class="row">
                    <div class="col"><h3>Tutor: ${dado.tutor.nome}</h3></div>
                </div>
                <div class="row">
                    <div class="col">Telefone: ${dado.tutor.telefone}</div>
                    <div class="col">Endereço: ${dado.tutor.endereco}</div>
                </div>
                <p>
                    Clubinho: 
                        ${clubinho}
                </p>
                <p>
                    Obs.: ${dado.observacoes}
                </p>
                <div class="servicos-popup">
                    <h4>Ultimos Serviços</h4>
                    ${dado.servicos.length > 0 ?
                        dado.servicos.map(servico => `
                            <div class="item-servico">
                                <div class="row">
                                    <div class="col">Data: ${servico.data}</div>
                                    <div class="col">Tipo de serviço: ${servico.tipo}</div>
                                </div>
                                <div class="row">
                                    <div class="col">Valor: ${servico.valor}</div>
                                    <div class="col">Forma de pagamento: ${servico.formapagamento}</div>
                                </div>
                            </div>
                            `).join('') :
                        "Nenhum serviço registrado"
                    }
                </div>
            </dialog>

            <div class="item-resultado" onclick="abrirModal('modal-${dado.pet.nome}')">
                <h2>${dado.pet.nome} - ${dado.tutor.nome}</h2>
                <p class="descricao-meta">
                    ${ultimoServico ? `Último serviço: ${ultimoServico.tipo} em ${ultimoServico.data}` : "Nenhum serviço registrado"}
                </p>
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

function fecharModal(botao) {
    const modal = botao.parentElement;
    modal.close();
}