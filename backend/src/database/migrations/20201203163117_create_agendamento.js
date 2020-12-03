
exports.up = function(knex) {
    return knex.schema.createTable('agendamento', function (table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('diaAgendamento').notNullable();
    });
  
};

exports.down = function(knex) {
  
};
