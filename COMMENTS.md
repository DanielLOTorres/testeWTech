Para a realização do teste foram escolhidos Node, Vue e MONGODB

Teste realizados nos endpoints através do Postman, foi adicionada a coleção onde pode-se conferir todos os endpoints.


Ideias para futuras implementações,
Ideias possíveis Caso o tempo disponibilizado fosse maior
Toda a aplicação seria feita orientada a TDD, assim podendo testar todos os endpoints e chamadas no frontend de forma mais organizada e sucinta. 
Fazer todo o sistema de login e cadastro de usuários usando as bibliotecas jwtwebtoken e bcrypt e adicionar verificações de autenticacao tanto nas rotas da API quanto
nas rotas de frontend
Utilizar a biblioteca liquor-tree junto com o bootstrap-vue para melhor desenvolvimento do design das telas e exibição de dados. A liquor-tree seria usada para mostrar a qual empresa um cliente pertence, a qual cliente a oferta pertence e a qual oferta o lance pertence, de forma organizada e otimizada, junto com ela criaria-se um form para alterarções, exclusoes e edições conforme os dados fossem selecionados na liquor-tree. 
Utilizar vee-validate para realizar as verificações dos forms do frontend
As páginas do frontend seriam finalizadas para possibilitar a edição, exclusão dos registros trazidos nas tabelas 
Também seriam alterados os componentes criados para componentes do bootstrap-vue
Seria finalizada  e otimizada a responsividade do site, uma vez que iniciou-se o design com o pensamento de mobile-first, mas foi abandonado devido ao tempo limitado. 


Optei por usar o MONGODB Atlas pela sua facilidade de acesso e de deploy, facilitando uma futura alocação da aplicação em nuvem. 
Por conta da utilização do MONGODB Atlas foi necessário utilizar a biblioteca dotenv uma vez que seria necessário esconder as váriaveis de login ao banco de dados.
(O arquivo .env está adicionado ao projeto apenas para possibilitar a avaliação, numa situação normal ele seria adicionado ao .gitignore)
Também por utilizar MONGODB, foi necessário utilizar a biblioteca Mongoose para possibilitar a conexão entre a API e o banco de dados.
A biblioteca express.js foi escolhida para a criação da API, tanto por ser de fácil acesso e uso, quanto pelo seu desempnho.
O nodemon foi utilizado como dependencia de desenvolvimento para facilitar os testes da API 
Para o frontend foi utilizado axios para realizar as chamadas nos endpoints, essa biblioteca foi escolhida pelo seu desempnho.
Foi necessário utilizar o vue-router para fazer as rotas das páginas de cadastro e consulta. 