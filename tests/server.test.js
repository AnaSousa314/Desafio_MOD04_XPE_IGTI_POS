const supertest = require('supertest');

const request = supertest("http://localhost:8000");

test("Servidor rodando na porta 8000", async () => {
    const resposta =  await request.get("/");
    expect(resposta.status).toBe(200);
});