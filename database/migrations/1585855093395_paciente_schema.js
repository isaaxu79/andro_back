'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PacienteSchema extends Schema {
  up () {
    this.create('pacientes', (table) => {
      table.increments()
      table.string('nombre', 100).notNullable()
      table.string('apellidop', 100).notNullable()
      table.string('apellidom', 100).notNullable()
      table.string('fecha_naci', 100).notNullable()
      table.integer('user_id').references('id').inTable('users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('pacientes')
  }
}

module.exports = PacienteSchema
