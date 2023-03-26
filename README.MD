## Desafio Modulo 04 

Desafio desenvolvido no módulo 04 da Pós-graduação em Desenvolvimento Full Stack.  

<hr>

### Lista de endpoints de Produtos  
[🐱‍🚀] - A entidade produto é composta pelas seguintes informações, sendo todas obrigatórias: Código (Texto),Descrição (Texto) e Preço (Número Positivo).  

<br>

[🐱‍🚀] - **POST** : realiza o cadastro de um novo produto e retorna o HTTP 201. Caso já exista um produto com o mesmo código, os dados de descrição e preço deverão ser atualizados e retornar HTTP 200. Caso o payload da requisição seja inválido, um HTTP 400 deverá ser retornado, juntamente com uma mensagem informando o(s) erro(s) observado(s).  

<br>  

[] - **PUT** : os dados de descrição e preço deverão ser atualizados e retornar HTTP 200. Caso o payload da requisição seja inválido, um HTTP 400 deverá ser retornado, juntamente com uma mensagem informando o(s) erro(s) observado(s). Caso não seja encontrado um produto com o mesmo código, um HTTP 405 deverá ser retornado, juntamente com uma mensagem informando o(s) erro(s) observado(s).  

<br>

[] - **GET** : retorna uma lista com todos os registros de produtos encontrados em uma resposta com status HTTP 200. ATENÇÃO: não é necessário realizar a leitura para um único registro.  

<br>  

[] - **DELETE** : deverá ser excluído o registro do produto informado, retornando os seus dados em uma resposta com status HTTP 200. Caso não seja encontrado um produto com o mesmo código, um HTTP 405 deverá ser retornado juntamente com uma mensagem informando o(s) erro(s) observado(s).