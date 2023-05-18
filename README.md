# API-code-burger

Para dar uniformidade ao código e deixar dinamico, utilizei Eslint + Prettier

Para facilitar a organização das pastas e códigos do projeto, utilizei do padrão MVC. Foi criada uma API rest, então, a view (a parte gráfica) ficou separada do servidor, entao ela fica junto com meu React em outro arquivo.
Entao, nessa aplicação tem o Model que me ajudou com o banco de dados e o controller aonde guardo minhas regras de negócio.

Criacao do container no docker, com o banco de dados postgres . 

Utilizei o SEQUELIZE(ORM) para facilitar o trabalho do SQL com o banco de dados, ou seja, utilizo o sequelize para que o meu banco de dados relacional ( postgres ) compreenda os codicos em javaScript. Meu banco de dados PostgreSQL, representa e armazena dados em tabelas e linhas.

Utilizou a biblioteca Multer , para auxiliar com que o front end encaminhe uma imagem para ser armazenado na minha aplicacao

Foi aplicado o token JWT, como forma de validação do usuario com o site, assim melhorando a segurança da aplicação.

Foram criadas tabelas relacionais , relacao da tabela de produtos com a tabela de categorias, atraves das migrations

Utilizado banco NAO relacional MongoDB, melhorando a performance da aplicacao, flexibilidade e escalabilidade ao armazenar e acessar dados nao estruturados.
E para fazer essa relacao do MongoDB com minha aplicacao, foi utilizado a biblioteca mongoose
