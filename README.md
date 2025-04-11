# 🩺 Sistema de Agendamento de Consultas Médicas

Este é um projeto completo de um sistema de agendamento de consultas médicas, com **backend em Node.js + Express** e **frontend em React com Tailwind CSS**. O sistema permite que usuários se cadastrem, façam login, e agendem ou gerenciem suas consultas médicas de forma simples e intuitiva.

## 🚀 Funcionalidades

- ✅ Cadastro e login de usuários com autenticação via JWT
- ✅ Dashboard de agendamentos
- ✅ Criação e exclusão de consultas médicas
- ✅ Armazenamento de dados em **banco de dados em memória**
- ✅ Interface moderna e responsiva com React + Tailwind CSS
- ✅ Backend e frontend integrados no mesmo projeto

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- JWT (jsonwebtoken)
- Middleware customizado
- Armazenamento em memória (arrays)

### Frontend
- React (Create React App)
- Tailwind CSS
- React Router DOM
- Fetch API para comunicação com o backend

## 📁 Estrutura de Pastas

```
/server                # Backend Express
  └── routes/          # Rotas de autenticação e agendamentos
  └── middleware/      # Middleware de autenticação
  └── models/          # Simulações de banco em memória
  └── public/          # Arquivos estáticos (React build)
  └── index.js         # Servidor principal

/client                # Frontend React
  └── src/
    └── pages/         # Login, Cadastro e Dashboard
    └── components/    # Componentes visuais
    └── App.js         # Gerenciamento de rotas
```

---

## 🧪 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/JoaoGui1430/sistema-agendamento-medico.git
cd sistema-agendamento-medico
```

### 2. Instale as dependências do backend

```bash
npm install
```

### 3. Instale as dependências do frontend

```bash
cd client
npm install
```

### 4. Faça o build do React

```bash
npm run build
```

> Isso irá gerar a pasta `build/` com os arquivos prontos para produção, que serão servidos automaticamente pelo backend.

### 5. Volte à pasta principal e inicie o servidor

```bash
cd ..
node index.js
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

---

## 👤 Sobre o Projeto

Este projeto foi desenvolvido como parte de estudos em **Node.js, React e Tailwind CSS**, com o objetivo de criar uma aplicação full-stack, funcional e esteticamente agradável.

---


## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e adaptar para seus próprios fins.

---

## ✨ Autor

Feito com 💻 por **João Guilherme**

[![GitHub](https://img.shields.io/badge/GitHub-gray?logo=github&style=flat-square)](https://github.com/JoaoGui1430)