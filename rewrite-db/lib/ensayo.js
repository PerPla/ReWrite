'use strict'

module.exports = function setupEnsayo(ModeloEnsayo) {

    async function create (ensayo) {
        const result = await ModeloDialogo.create(ensayo)
        return result.toJSON()
    }

    function findAll () {
        return ModeloEnsayo.findAll()
    }

    function findById (id) {
        return ModeloEnsayo.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}