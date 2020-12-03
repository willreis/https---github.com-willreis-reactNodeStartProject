const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
/**com isso a aplicação entende que tudo o que for passado na requisição é via json */


/**Rota / Recurso */
app.use(routes);

app.listen(3333);



  


