'use strict'

module.exports = function setupEstrofa(ModeloEstrofa) {

    async function create (estrofa) {
        const result = await ModeloObra.create(estrofa)
        return result.toJSON()
    }

    function findAll () {
        return ModeloEstrofa.findAll()
    }

    function findById (id) {
        return ModeloEstrofa.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}