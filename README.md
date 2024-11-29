# Meu Github

## Projeto desenvolvido durante o curso de Desenvolvedor Full-Stack Python pela EBAC

---

Este projeto é uma demonstração prática dos conceitos abordados ao longo do curso, realizando a integração com a **API do GitHub** para exibir informações detalhadas sobre um perfil de usuário. Utilizando **JavaScript**, **jQuery** e **Fetch API**, o projeto exibe dados como nome, número de seguidores, repositórios públicos, entre outras informações diretamente do perfil GitHub. 

### Destaques do projeto:

- **jQuery:** A biblioteca é utilizada para otimizar a manipulação do DOM e facilitar a atualização dos elementos da página com os dados da API de forma eficiente.

- **Fetch API:** Utilizada para realizar requisições HTTP assíncronas para a API do GitHub. O uso do `fetch` simplifica o processo de obtenção de dados, tornando o código mais limpo e fácil de entender. 

- **Uso de Promises (then/catch):** A solução usa Promises para lidar com a resposta assíncrona da requisição à API, tratando tanto o sucesso quanto erros de forma clara com o uso de `.then()` e `.catch()`. Isso garante que a aplicação seja robusta e forneça feedback apropriado ao usuário em caso de falha.

- **Manipulação do DOM:** O código usa jQuery para atualizar dinamicamente o conteúdo HTML da página com as informações recebidas da API, como nome, quantidade de seguidores, avatar e outros dados do perfil do GitHub.

### Funcionalidades:

- **Exibição de Dados do Usuário:** O nome do usuário, número de seguidores, número de repositórios públicos, número de pessoas que o usuário está seguindo, e o link para o perfil são extraídos da API do GitHub e exibidos na página.

- **Avatar:** A imagem de perfil do usuário no GitHub é carregada dinamicamente através da URL fornecida pela API.

- **Links Dinâmicos:** O link para o perfil do GitHub do usuário é atualizado na página para permitir que o visitante acesse o perfil diretamente.

### Tecnologias utilizadas:

- **HTML5**
- **CSS3**
- **JavaScript**
- **jQuery**
- **Fetch API**

---

Confira o projeto em: [monosodrac-github](https://monosodrac-github.vercel.app/)
