const app = require('./app');

const db = require('../src/config/pg');


db.sequelize.sync().then(async () => {
    await console.log('Conectado ao banco de dados!');
  });
  
  app.listen(8000, () => {
    console.log('Server started at port 8000');
  });
  