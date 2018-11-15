'use strict'

module.exports = function setupDramatico(ModeloDramatico) {

    async function create (dramatico) {
        const result = await ModeloDialogo.create(dramatico)
        return result.toJSON()
    }

    function findAll () {
        return ModeloDramatico.findAll()
    }

    function findById (id) {
        return ModeloDramatico.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}