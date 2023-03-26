const express = require("express");
const winston = require("winston");

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp })=>{
  return `${timestamp} [ ${label} ] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: "product_app.log"})
  ],
  format: combine(
    label({ label: "product_app" }),
    timestamp(),
    myFormat
  )
});

const app = express();

const router = require("../routes/produto.route")

app.use(express.json());
app.use(router)

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({error: err.message});
});

module.exports = app;