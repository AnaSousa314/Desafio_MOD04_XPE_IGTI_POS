const Produto = require("../models/Produto");

async function createProduto(req, res, next) {
  try {
    let product = req.body;

    if (!product.codigo || !product.descricao || !product.preco) {
      throw new Error("Codigo, descrição e preço são obrigatórios")
    }

    let existsCodigo = await Produto.findOne({
      where: {
        codigo: product.codigo
      }
    });
    
    if (existsCodigo) {

      let updateProduct = await Produto.findOne({
        where: {
          codigo: existsCodigo.codigo
        }
      });

      updateProduct.descricao = product.descricao
      updateProduct.preco = product.preco

      const resultadoSave = await updateProduct.save()
      console.log(resultadoSave)

      console.log("Entrou no IF")
      return res.status(200).send(resultadoSave);
    } 

    product.preco = parseFloat(product.preco)
    console.log(typeof product.preco)
    product = await Produto.create(product);
    logger.info(`POST /produto - ${JSON.stringify(product)}`);
    return res.status(201).send(product)
  
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createProduto
}