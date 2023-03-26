const supertest = require('supertest');

const request = supertest('http://localhost:8000');

const router = require("../routes/produto.route.js");
const Produto = require("../models/Produto.js");

describe("Testes de integração", () => {
    beforeEach(async () => {
        await Produto.destroy({ where: {} });
    });

    afterAll(async () => 
    Produto.sequelize.close());

    const produtoMouse = {
        codigo: "1",
        descricao: "mouse",
        preco: 50.99
    }
    const produtoTeclado = {
        codigo: "1",
        descricao: "teclado",
        preco: 150.99
    }


    // test('responder http 200 na raiz - Versão 01', () => request(router).get('/')
    // .then((res) => expect(res.status).toBe(200)));

   test("Should Create a new Item", async () =>{
    const res = await request
        .post('/produto')
        .send(produtoMouse);

    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.codigo).toEqual('1');
   });

   test("Should Update a new Item if codigo exists", async () =>{
    const res = await request
        .post('/produto')
        .send(produtoMouse);

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.codigo).toEqual('1');
   });

   test("Should update an Product", async () => {
    const res = await request
    .put('/produto')
    .send(produtoTeclado);

    expect(res.status).toEqual(200);
    expect(res.body.descricao).toEqual("teclado");
   })


})