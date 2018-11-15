'use strict'

module.exports = function setupLirico(ModeloLirico) {

    async function create (lirico) {
        const result = await ModeloLirico.create(lirico)
        return result.toJSON()
    }

    function findAll () {
        return ModeloLirico.findAll()
    }

    function findById (id) {
        return ModeloLirico.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}