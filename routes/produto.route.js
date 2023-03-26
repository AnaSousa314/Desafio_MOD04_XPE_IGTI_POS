const express = require("express");

const router = express.Router();

const ProdutoController = require("../controllers/produto.controller.js");

router.get("/teste", (req,res)=>{
    res.send("Deu certo")
});

router.get('/', async (req, res) => {
    res.status(200).send('Bootcamp desenvolvedor back end - Tópicos especiais!');
  });

router.post("/produto", ProdutoController.createProduto);
router.put("/produto", ProdutoController.updateProduto);
router.get("/produto", ProdutoController.listProdutos);
router.delete("/produto/:codigo", ProdutoController.deleteProdutos);

module.exports = router;