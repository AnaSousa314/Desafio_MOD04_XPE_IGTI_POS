const supertest = require('supertest');
const { Op } = require("sequelize");

const request = supertest('http://localhost:8000');

const router = require("../routes/produto.route.js");
const Produto = require("../models/Produto.js");

describe("Testes de integração", () => {
    let codigo = "1";

    beforeEach(async () => {
        await Produto.destroy({ where: { }});
        await Produto.create({codigo: "1", descricao: "pendrive", preco: 36})
        await Produto.create({codigo: "2", descricao: "teclado", preco: 150.99})
    });

    afterAll(async () => 
    Produto.sequelize.close());

    const produtoMouse = {
        codigo: "3",
        descricao: "mouse",
        preco: 50.99
    }
    const produtoTeclado = {
        codigo: "2",
        descricao: "teclado",
        preco: 150.99
    }

    const produtoCamera = {
        codigo: "2",
        descricao: "camera",
        preco: 1500
    }
    
    // test('responder http 200 na raiz - Versão 01', () => request(router).get('/')
    // .then((res) => expect(res.status).toBe(200)));
    
    test("Should Create a new Product", async () =>{
    const res = await request
        .post('/produto')
        .send(produtoMouse);

    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.codigo).toEqual('3');
   });

   test("Should Update a new Product if codigo exists", async () =>{
    const res = await request
        .post('/produto')
        .send(produtoTeclado);

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.codigo).toEqual('2');
   });

   test("Should update an Product", async () => {
    const res = await request
    .put('/produto')
    .send(produtoCamera);

    expect(res.status).toEqual(200);
    expect(res.body.descricao).toEqual("camera");
   });

   test("Should get a list of products", async () => {
    const res = await request
        .get('/produto');
    
    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body).toHaveLength(2);
   });

   test("Should delete an product", async () => {
    const res = await request
        .delete(`/produto/${codigo}`);

    expect(res.status).toEqual(200)
   });


})