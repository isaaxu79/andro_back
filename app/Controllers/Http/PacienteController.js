'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pacientes
 */

const Paciente = use('App/Models/Paciente');
class PacienteController {
  /**
   * Show a list of all pacientes.
   * GET pacientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const pacientes = await Paciente.all()
    response.send(pacientes)
  }

  /**
   * Render a form to be used for creating a new paciente.
   * GET pacientes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new paciente.
   * POST pacientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let paciente_data = request.all()

    let paciente = await Paciente.create(paciente_data)

    return response.status(201).json(paciente)
  }

  /**
   * Display a single paciente.
   * GET pacientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let { id } = params
    let paciente = await Paciente.find(id)

    return response.status(200).json(paciente)
  }

  /**
   * Render a form to update an existing paciente.
   * GET pacientes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update paciente details.
   * PUT or PATCH pacientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let { id } = params
    let paciente_data = request.all()

    let paciente = await Paciente.findOrFail(id)

    paciente.merge(paciente_data)

    await paciente.save()

    return response.status(201).json(paciente)
  }

  /**
   * Delete a paciente with id.
   * DELETE pacientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let { id } = params
    let paciente = await Paciente.findOrFail(id)

    await paciente.delete()

    return response.status(200).json({
        msg: 'Eliminado'
    })
  }
}

module.exports = PacienteController
