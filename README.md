# Projeto_Labs_Updated

Instalação
Após clonar o repositorio..

$ Deve rodar o comando: npm install 

## Rodando a aplicação
Após isntalado o npm, é necessário usar o comando: docker-compose up -d  Para subir o banco de dados

Em seguida, para iniciar a migrate rode o comando: npx sequelize-cli db:migrate

Use o comando: npm run dev - Para iniciar a aplicação.


## Autenticação
Na rota de customer,(Insomnia/postman) crie um usuário que vai na rota (http://localhost:3333/customer) passa o e-mail e nome do usuário.

Com usuário criado, pegue o e-mail criado, e na rota de autenticação: http://localhost:3333/authenticate/ 
Passando como Json o e-mail criado e será gerado um token

O token deve ser passado como header: x-access-tokenque ai vai dar autorização para usar as outras rotas


## Rotas Usuarios

- Rota para cadastrar usuario routes.post('/customer'
- Rota para listar usuarios routes.get('/customer'
- Rota para deletar usuario routes.put('/customer/:id'
- Rota para alterar usuario routes.delete('/customer/:id'

## Rotas Produtos

- Rota para cadastrar produtos routes.post('/products'
- Rota para listar produtos routes.get('/products'
- Rota para listar um produto routes.post('/authenticate'
- Rota para deletar produto routes.delete('/products/:id'
- Rota para alterar produto routes.get('/products/:id'
