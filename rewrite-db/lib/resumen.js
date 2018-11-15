'use strict'

module.exports = function setupResumen(ModeloResumen) {

    async function create (resumen) {
        const result = await ModeloPersonaje.create(resumen)
        return result.toJSON()
    }

    function findAll () {
        return ModeloResumen.findAll()
    }

    function findById (id) {
        return ModeloResumen.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}