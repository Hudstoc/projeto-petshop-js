function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém a seção HTML onde é digitado o que será pesquisado
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verificação se o campo de pesquisa não esta vazio
    if(!campoPesquisa){
        // Se o vazio imprime a mensagem
        section.innerHTML = "<p>Nenhum resultado para a pesquisa. Você não digitou nome do pet ou tutor.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Inicializa uma string vazia para armazenar os textos alterados para minusculo
    let petNome = "";
    let tutorNome = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dadosPetshop) {

        petNome = dado.pet.nome.toLowerCase();
        tutorNome = dado.tutor.nome.toLowerCase();
        
        // Se pet nome ou tutor nome includes campoPesquisa
        if(petNome.includes(campoPesquisa) || tutorNome.includes(campoPesquisa)){

            // Declarando a variavel que irá receber o ultimo serviço prestado
            let ultimoServico;

            // Verificar se o pet tem serviços
            if (dado.servicos.length > 0) {
                ultimoServico = dado.servicos[dado.servicos.length - 1];
            }

            if (dado.clubinho == true) {
                clubinho = "✔";
            }else{
                clubinho = "";
            }

            // Cria um novo elemento HTML para cada resultado
            resultados += `
                <dialog id="modal-${dado.pet.nome}">
                    <button onclick="fecharModal(this)" class="fechar">X</button>
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
                    <img class="foto" src="${dado.pet.foto}">
                    <h2>${dado.pet.nome} - ${dado.tutor.nome}</h2>
                    <h5>Endereço: ${dado.tutor.endereco}</h5>
                    <p class="descricao-meta">
                        ${ultimoServico ? `Último serviço: ${ultimoServico.tipo} em ${ultimoServico.data}` : "Nenhum serviço registrado"}
                    </p>
                </div>
            `;
        }
        
    }
        
    if(!resultados){
        resultados = "<p>Nenhum resultado para a pesquisa</p>";
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