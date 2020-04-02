'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicinaSchema extends Schema {
  up () {
    this.create('medicinas', (table) => {
      table.increments()
      table.string('nombre_comercial', 254).notNullable()
      table.string('nombre_quimico', 254).notNullable()
      table.string('presentacion', 254).notNullable()
      table.string('contenido', 254).notNullable()
      table.string('via_suministrado', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('medicinas')
  }
}

module.exports = MedicinaSchema
