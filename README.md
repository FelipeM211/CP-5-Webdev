# CP-05 - Buscador de Filmes

## Participantes do Grupo

- **Felipe B Murad** - RM562347
- **Lucas Massoni** - RM561686

## Descrição do projeto

Este é um aplicativo web de busca de filmes desenvolvido em React que permite aos usuários pesquisar e visualizar informações sobre filmes. O projeto utiliza a API do OMDB (Open Movie Database) para buscar dados de filmes em tempo real.

### Funcionalidades:
- Busca de filmes por título
- Exibição de resultados com poster, título e ano
- Interface responsiva e moderna
- Loading states e tratamento de erros
- Contador de resultados encontrados

## Tecnologias usadas

- **React 19.1.1** - Biblioteca para construção da interface
- **Vite 7.1.7** - Build tool e servidor de desenvolvimento
- **Tailwind CSS 4.1.14** - Framework CSS para estilização
- **ESLint** - Linter para qualidade do código
- **PostCSS** - Processador CSS
- **Autoprefixer** - Plugin para compatibilidade de CSS

## Como executar localmente

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd CP-5-Webdev/cp-05
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a API Key (opcional):**
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione sua chave da API OMDB:
   ```
   VITE_OMDB_API_KEY=sua_chave_aqui
   ```
   - Se não configurar, será usada a chave demo "thewdb"

4. **Execute o projeto:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   - Digite `o` para abrir o server no navegador


## Fonte da API utilizada

Este projeto utiliza a **OMDB API** (Open Movie Database API) para buscar informações sobre filmes.

- **URL da API:** https://www.omdbapi.com/
- **Documentação:** http://www.omdbapi.com/
- **Chave demo:** "thewdb" (limitada a 1000 requisições por dia)
- **Para produção:** É necessário obter uma chave própria em http://www.omdbapi.com/apikey.aspx

