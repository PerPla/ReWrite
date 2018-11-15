'use strict'

module.exports = function setupDialogo(ModeloDialogo) {

    async function create (dialogo) {
        const result = await ModeloDialogo.create(dialogo)
        return result.toJSON()
    }

    function findAll () {
        return ModeloDialogo.findAll()
    }

    function findById (id) {
        return ModeloDialogo.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}