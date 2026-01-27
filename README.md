# 👟 Tênis Store API

API REST desenvolvida em Node.js utilizando Express e MongoDB (Mongoose) para gerenciamento de um produto (tênis).

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv

## 📦 Funcionalidades

- Cadastrar tênis
- Listar todos os tênis
- Buscar tênis por ID
- Atualizar tênis
- Deletar tênis

## 📌 Rotas

| Método | Rota | Descrição |
|-------|------|-----------|
| GET | /tenis | Lista todos os tênis |
| GET | /tenis/:id | Busca tênis por ID |
| POST | /tenis | Cadastra um tênis |
| PUT | /tenis/:id | Atualiza um tênis |
| DELETE | /tenis/:id | Remove um tênis |

## 🧪 Testes

As rotas podem ser testadas utilizando o Postman.

## 📚 Aprendizados

Projeto desenvolvido com foco em:

- Estruturação de API REST
- Separação em camadas (config, models, controllers, routes)
- Conexão com MongoDB
- CRUD completo com validações

