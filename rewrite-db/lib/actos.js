'use strict'

module.exports = function setupActos(ModeloActos) {

    async function create (actos) {
        const result = await ModeloActos.create(actos)
        return result.toJSON()
    }

    function findAll () {
        return ModeloActos.findAll()
    }

    function findById (id) {
        return ModeloActos.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}