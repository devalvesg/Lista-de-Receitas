# Lista de Receitas

Este projeto é uma aplicação web **Single Page Application (SPA)** desenvolvida em **React** e **TypeScript**, que utiliza a API pública [TheMealDB](https://www.themealdb.com/api.php) para exibir e buscar receitas culinárias de diversas regiões do mundo.

---

## 🎯 Objetivos
- Exibir 20 receitas aleatórias na página inicial.
- Permitir busca de receitas por nome.
- Filtrar receitas por letra inicial (A–Z).
- Listar ingredientes disponíveis e buscar por ingrediente.
- Exibir receitas que utilizam um determinado ingrediente.
- Mostrar detalhes completos de preparo: ingredientes, medidas e instruções.
- Cache local (localStorage) para otimizar a lista de ingredientes.

---

## 🗂️ Sumário
1. [Tecnologias Utilizadas](#tecnologias-utilizadas)
2. [Instalação](#instalação)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Como Executar](#como-executar)
5. [Scripts Disponíveis](#scripts-disponíveis)
6. [Rotas da Aplicação](#rotas-da-aplicação)
7. [Detalhes da API](#detalhes-da-api)
8. [Contribuição](#contribuição)
9. [Licença](#licença)

---

## 🛠️ Tecnologias Utilizadas
- **Framework:** React 18
- **Linguagem:** TypeScript
- **Bundler:** Vite
- **Roteamento:** React Router v6
- **Requisições HTTP:** Axios
- **Estilização:** CSS puro (arquivos em `src/styles`)
- **Linting:** ESLint + TypeScript ESLint
- **API:** TheMealDB (gratuita e sem autenticação)

---

## 📂 Estrutura do Projeto
```
Lista-de-Receitas/
├── public/                  # Arquivos estáticos (favicon, assets do Vite)
├── src/
│   ├── assets/              # Imagens usadas na interface
│   ├── axios/               # Configuração central do Axios
│   │   └── config.ts        # BaseURL da API
│   ├── components/          # Componentes React reutilizáveis
│   ├── models/              # Interfaces TypeScript (ex: Recipe)
│   ├── styles/              # Arquivos CSS por componente
│   ├── App.tsx              # Container principal com rotas
│   ├── main.tsx             # Ponto de entrada da aplicação
│   └── index.css            # Estilos globais
├── .eslintrc.cjs            # Configuração do ESLint
├── tsconfig.json            # Configuração do TypeScript
├── vite.config.ts           # Configuração do Vite
├── package.json             # Dependências e scripts
└── README.md                # Documentação do projeto
```

---

## 🚀 Instalação
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/devalvesg/Lista-de-Receitas.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd Lista-de-Receitas
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

---

## ▶️ Como Executar
- **Modo de desenvolvimento:**
  ```bash
  npm run dev
  # abre: http://localhost:5173
  ```
- **Build para produção:**
  ```bash
  npm run build
  ```
- **Visualizar build gerado:**
  ```bash
  npm run preview
  ```

---

## 📜 Scripts Disponíveis
| Comando           | Descrição                                                                  |
| ----------------- | -------------------------------------------------------------------------- |
| `npm run dev`     | Inicia a aplicação em modo de desenvolvimento (Vite).                     |
| `npm run build`   | Compila o projeto para produção.                                          |
| `npm run preview` | Pré-visualiza o build localmente.                                         |
| `npm run lint`    | Executa o ESLint em todos os arquivos `.ts`/`.tsx`.                       |

---

## 🔀 Rotas da Aplicação
| Rota                         | Componente       | Descrição                                                   |
| ---------------------------- | ---------------- | ----------------------------------------------------------- |
| `/`                          | `Home`           | Página inicial com receitas aleatórias e busca por nome.    |
| `/recipe-by-letter`          | `Letter`         | Filtra receitas por letra inicial (A–Z).                   |
| `/ingredient-list`           | `Ingredient`     | Lista e busca de ingredientes.                             |
| `/ingredients-page?query=`   | `IngredientPage` | Receitas que contêm o ingrediente selecionado.              |
| `/recipe/:name`              | `Preparation`    | Detalhes completos de uma receita (preparo).                |

---

## 📡 Detalhes da API TheMealDB
A aplicação consome os seguintes endpoints, todos sem necessidade de chave de autenticação:

| Endpoint                        | Descrição                                             |
| ------------------------------- | ----------------------------------------------------- |
| `/random.php`                   | Retorna 1 receita aleatória.                          |
| `/search.php?s={nome}`          | Busca receitas pelo nome completo ou parcial.         |
| `/search.php?f={letra}`         | Busca receitas pela primeira letra.                   |
| `/list.php?i=list`              | Lista todos os ingredientes disponíveis.              |
| `/filter.php?i={ingrediente}`   | Filtra receitas que utilizam um determinado ingrediente.|

---

## 🤝 Contribuição
1. Fork este repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas alterações (`git commit -m 'Adicionando nova feature'`).
4. Push para a branch (`git push origin feature/minha-feature`).
5. Abra um Pull Request.

---

## 📜 Licença
Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
