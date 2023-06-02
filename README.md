# API-code-burger

Para dar uniformidade ao código e deixar dinâmico, utilizei Eslint + Prettier.

Para facilitar a organização das pastas e códigos do projeto, utilizei do padrão MVC. Foi criada uma API rest, então, a view (a parte gráfica) ficou separada do servidor, então ela fica junto com meu React em outro arquivo.
Portanto, nessa aplicação tem o Model que me ajudou com o banco de dados e o controller aonde guardo minhas regras de negócio.

Criação do container no docker, com o banco de dados postgres . 

O método Yup para validação de dados, e a biblioteca UUID para a geração de IDs.

Utilizei o SEQUELIZE(ORM) para facilitar o trabalho do SQL com o banco de dados, ou seja, utilizo o sequelize para que o meu banco de dados relacional ( postgres ) compreenda os códicos em javaScript. Meu banco de dados PostgreSQL, representa e armazena dados em tabelas e linhas.

Utilizado a biblioteca Multer , para auxiliar com que o front end encaminhe uma imagem para ser armazenado na minha aplicação.

Foi aplicado o token JWT, como forma de validação do usuário com o site, assim melhorando a segurança da aplicação.

Foram criadas tabelas relacionais , relação da tabela de produtos com a tabela de categorias, através das migrations.

Utilizado banco NÃO relacional MongoDB, melhorando a performance da aplicação, flexibilidade e escalabilidade ao armazenar e acessar dados não estruturados.
E para fazer essa relação do MongoDB com minha aplicação, foi utilizado a biblioteca mongoose.

# Ferramentas :

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Javascript">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" >
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" >
<img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue" alt="Sequelize.js">
<img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" alt="Token JWT">
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres">
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
<img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">

<br>
