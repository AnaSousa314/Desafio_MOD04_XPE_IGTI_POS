const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  dialect: 'postgres',
  host: process.env.HOST_DOCKER,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  logging: false,
}