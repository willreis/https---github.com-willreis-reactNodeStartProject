const express = require('express');

const AgendamentoController = require('./controllers/AgendamentoController');

const connection = require('./database/connection');

const routes = express.Router();

/**aqui na rota eu chamo o controler, esse .index é o metodo de listar o que foi salvo */
routes.get('/agendamento', AgendamentoController.index);/**.index pq eu listo */
routes.post('/agendamento', AgendamentoController.create);/**.create pq eu envio esses dados */

/**Com isso eu exporto as rotas para onde quiser
 * E para chamar no arquivo desejado eu devo inserir 
 * app.use(routes);
 */
module.exports = routes