const Sequelize = require("sequelize");
const dotenv = require("dotenv")
dotenv.config()

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  logging: false,
  define: {
    timestamp: false
  }
});

module.exports = {
  sequelize
}