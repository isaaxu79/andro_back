'use strict'

const Medicamento = use('App/Models/Medicina');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with medicinas
 */
class MedicinaController {
  /**
   * Show a list of all medicinas.
   * GET medicinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const medicamento = await Medicamento.all()
    response.send(medicamento)
  }

  /**
   * Render a form to be used for creating a new medicina.
   * GET medicinas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new medicina.
   * POST medicinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let medicamento_data = request.all()

    let medicamento = await Medicamento.create(medicamento_data)

    return response.status(201).json(medicamento)
  }

  /**
   * Display a single medicina.
   * GET medicinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let { id } = params
    let medicamento = await Medicamento.find(id)

    return response.status(200).json(medicamento)
  }

  /**
   * Render a form to update an existing medicina.
   * GET medicinas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update medicina details.
   * PUT or PATCH medicinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let { id } = params
    let medicamento_data = request.all()

    let medicamento = await Medicamento.findOrFail(id)

    medicamento.merge(medicamento_data)

    await medicamento.save()

    return response.status(201).json(medicamento)
  }

  /**
   * Delete a medicina with id.
   * DELETE medicinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let { id } = params
    let medicamento = await Medicamento.findOrFail(id)

    await medicamento.delete()

    return response.status(200).json({
        msg: 'Eliminado'
    })
  }
}

module.exports = MedicinaController
