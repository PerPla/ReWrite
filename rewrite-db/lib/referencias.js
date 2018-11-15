'use strict'

module.exports = function setupReferencias(ModeloReferencias) {

    async function create (referencias) {
        const result = await ModeloPersonaje.create(referencias)
        return result.toJSON()
    }

    function findAll () {
        return ModeloReferencias.findAll()
    }

    function findById (id) {
        return ModeloReferencias.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}