# Projeto_Labs_Updated

Instalação
Após clonar o repositorio..

$ npm install

## Rodando a aplicação
Para rodar a apliação, é necessário usar compose up no docker
É necessário acessar a rota http://localhost:8080/ do Adminer e criar o banco de dados.

#development
$ npm run dev


```bash
## Migration
 - Para rodar a migration é preciso usar o comando npx sequelize-cli db:migrate
 - Para parar a migration poderá ser usado o comando npx sequelize-cli db:migrate:undo


```bash
## Servidor
app.listen(3333, () => console.log('Starting server in the door 3333 🚀'))

## Rotas Usuarios

- Rota para cadastrar usuario routes.post('/customer'
- Rota para listar usuarios routes.get('/customer'
- Rota para deletar usuario routes.put('/customer/:id'
- Rota para alterar usuario routes.delete('/customer/:id'
```

```bash
## Rotas Produtos

- Rota para cadastrar produtos routes.post('/products'
- Rota para listar produtos routes.get('/products'
- Rota para listar um produto routes.post('/authenticate'
- Rota para deletar produto routes.delete('/products/:id'
- Rota para alterar produto routes.get('/products/:id'

#Autenticação
- Rota para o token routes.post('/authenticate'
