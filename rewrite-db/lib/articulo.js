'use strict'

module.exports = function setupArticulo(ModeloArticulo) {

    async function create (articulo) {
        const result = await ModeloArticulo.create(articulo)
        return result.toJSON()
    }

    function findAll () {
        return ModeloArticulo.findAll()
    }

    function findById (id) {
        return ModeloArticulo.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}