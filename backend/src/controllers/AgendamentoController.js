const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const agendamento = await connection('agendamento').select('*');
        return response.json(agendamento);
    },

    async create(request, response){
        const { nome, email, telefone, diaAgendamento } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('agendamento').insert({
                id,
                nome,
                email,
                telefone,
                diaAgendamento,
            })
            return response.json({ id });
    }
};