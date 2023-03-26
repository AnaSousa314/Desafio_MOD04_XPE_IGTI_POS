const Sequelize = require("sequelize");
const db = require("../src/config/pg.js");

const Produto = db.sequelize.define('Produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    codigo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

}, {
    timestamps: false
});


module.exports = Produto;