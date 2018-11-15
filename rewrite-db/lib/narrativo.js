'use strict'

module.exports = function setupNarrativo(ModeloNarrativo) {

    async function create (narrativo) {
        const result = await ModeloNarrativo.create(narrativo)
        return result.toJSON()
    }

    function findAll () {
        return ModeloNarrativo.findAll()
    }

    function findById (id) {
        return ModeloNarrativo.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}