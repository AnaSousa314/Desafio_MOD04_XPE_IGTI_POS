## Desafio Modulo 04 

Desafio desenvolvido no módulo 04 da Pós-graduação em Desenvolvimento Full Stack.  

<hr>

### Lista de endpoints de Produtos  
[🐱‍🚀] - A entidade produto é composta pelas seguintes informações, sendo todas obrigatórias: Código (Texto),Descrição (Texto) e Preço (Número Positivo).  

<br>

[🐱‍🚀] - **POST** : realiza o cadastro de um novo produto e retorna o HTTP 201. Caso já exista um produto com o mesmo código, os dados de descrição e preço deverão ser atualizados e retornar HTTP 200. Caso o payload da requisição seja inválido, um HTTP 400 deverá ser retornado, juntamente com uma mensagem informando o(s) erro(s) observado(s).  

<br>  

[🐱‍🚀] - **PUT** : os dados de descrição e preço deverão ser atualizados e retornar HTTP 200. Caso o payload da requisição seja inválido, um HTTP 400 deverá ser retornado, juntamente com uma mensagem informando o(s) erro(s) observado(s). Caso não seja encontrado um produto com o mesmo código, um HTTP 405 deverá ser retornado, juntamente com uma mensagem informando o(s) erro(s) observado(s).  

<br>

[🐱‍🚀] - **GET** : retorna uma lista com todos os registros de produtos encontrados em uma resposta com status HTTP 200. ATENÇÃO: não é necessário realizar a leitura para um único registro.  

<br>  

[🐱‍🚀] - **DELETE** : deverá ser excluído o registro do produto informado, retornando os seus dados em uma resposta com status HTTP 200. Caso não seja encontrado um produto com o mesmo código, um HTTP 405 deverá ser retornado juntamente com uma mensagem informando o(s) erro(s) observado(s).

<hr>

### Lista de atividades  
[🐱‍🚀] 01 - Realizar a implementação da API Rest e adicioná-la a um contêiner baseado na imagem https://hub.docker.com/_/node.  

[] 02 - A persistência dos dados deverá ser realizada utilizando uma base de dados postgresql. Nesse caso, poderá ser utilizada a instalação nativa da base ou ainda um contêiner baseado na imagem https://hub.docker.com/_/postgres.  

[] 03 - Deverão ser implementados os testes de integração com supertest + jest (não é necessária a implementação de testes unitários).  

[🐱‍🚀] 04 - Deverá ser criado um repositório no github e feito o push da solução.