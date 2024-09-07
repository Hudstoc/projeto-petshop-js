## README: Projeto Petshop - Um Mini Sistema de Gestão de Clientes e Serviços

### Você pode acessar o projeto rodando em no link <https://projeto-petshop-js.vercel.app/>

### Necessidade

Identifiquei que meu pai, que tem um petshop de bairro, faz as anotações em um caderno conforme atende os clientes e usa este caderno para verificar quando foi a ultima vez que atendeu certo cliente, o valor cobrado e outras informações.
Na  Imersão Dev com Gemini! da Alura, identifiquei que conseguiria criar um código mais simples do que eu imaginava para resolver este problema dele.

### Objetivo

Este projeto tem como objetivo criar um mini sistema de petshop utilizando HTML, CSS e JavaScript. A aplicação permite a busca por clientes e a visualização detalhada de seus dados, incluindo histórico de serviços, informações do pet e do tutor. A base de dados dos clientes é armazenada em um arquivo JavaScript (dados.js) para facilitar a manutenção e a adição de novos registros.

### Funcionalidades

* **Pesquisa:** Permite realizar buscas por clientes, filtrando pelos nomes do pet ou do tutor.
* **Visualização Detalhada:** Ao clicar em um resultado da pesquisa, é exibido um modal com todas as informações do cliente, incluindo histórico de serviços, dados do pet e do tutor.
* **Interface Intuitiva:** A interface do usuário foi projetada para ser simples e fácil de usar, com um layout responsivo que se adapta a diferentes tamanhos de tela.
* **Armazenamento de Dados:** Os dados dos clientes são armazenados em um arquivo JavaScript (dados.js), facilitando a manutenção e a adição de novos registros.

### Tecnologias Utilizadas

* **HTML:** Estruturação da página e dos elementos da interface.
* **CSS:** Estilização da página, definindo cores, fontes, layout e responsividade.
* **JavaScript:** Lógica da aplicação, incluindo a pesquisa, a manipulação do DOM e a exibição dos resultados.

### Como Funciona

1. **Dados:** Os dados dos clientes estão armazenados em um array no arquivo `dados.js`. Cada objeto dentro do array representa um cliente e contém informações sobre o pet, o tutor e os serviços realizados.
2. **Pesquisa:** Ao digitar um nome no campo de pesquisa e clicar no botão, o JavaScript filtra os dados e exibe os resultados correspondentes na tela.
3. **Visualização Detalhada:** Ao clicar em um resultado da pesquisa, um modal é aberto com as informações completas do cliente.
4. **Responsividade:** A aplicação se adapta a diferentes tamanhos de tela, garantindo uma boa experiência para o usuário em dispositivos móveis e desktops.

### Uso do Google Gemini

O modelo de linguagem Google Gemini foi utilizado como ferramenta auxiliar durante o desenvolvimento deste projeto. O Gemini auxiliou na:

* **Geração da logo:** Criação de logo temporária para o inicio do projeto.
* **Geração de código:** Sugerindo snippets de código e estruturas de dados.
* **Resolução de problemas:** Ajudando a encontrar soluções para problemas específicos.
* **Melhoria do código:** Sugerindo formas mais eficientes e elegantes de escrever o código.

### Próximos Passos

* **Inclusão de dados verdadeiros:** Utilizar uma IA para transcrever as paginas escaneadas de um caderno para o arquivo `dados.js`.
* **Inclusão de nova pagina:** Pagina de Login para ter acesso a pagina de cadastro e edição dos clientes.
* **Inclusão de nova pagina:** Cadastro de clientes e alteração dos dados dos clientes já cadastrados, podendo adicionar cliente, serviço e alterar as informações pelo navegador.
* **Inclusão de novas funcionalidades:** Implementar funcionalidades como filtragem por clubinhos, criação de uma pagina mostrando todos os clientes com paginação, calendario com agendamento e visualização dos clientes por data.
* **Integração com banco de dados:** Migrar os dados para um banco de dados para maior segurança e escalabilidade.
* **Melhoria da interface:** Personalizar ainda mais a interface com a adição de imagens, animações e outros elementos visuais.

**Observações:**

* **Arquivo `dados.js`:** Este arquivo contém os dados dos clientes e pode ser editado para adicionar novos registros.
* **Personalização:** Você pode personalizar o projeto de acordo com suas necessidades, alterando o design, as funcionalidades e os dados.

**Para iniciar o projeto:**

1. **Clone este repositório:** Se o projeto estiver em um repositório Git, clone-o para sua máquina local.
2. **Abra os arquivos:** Abra os arquivos HTML, CSS e JavaScript em um editor de código.
3. **Execute o arquivo HTML:** Abra o arquivo HTML em um navegador para visualizar a aplicação.

**Agradecimentos:**

Agradeço à Alura e aos seus professores pela maravilhosa Imersão Dev com Gemini e pelo valioso ensino durante a mesma.

**## Contribuições**

Se você quiser contribuir para este projeto, fique à vontade para abrir um pull request.
