'use strict'

module.exports = function setupPersonaje(ModeloPersonaje) {

    async function create (personaje) {
        const result = await ModeloPersonaje.create(personaje)
        return result.toJSON()
    }

    function findAll () {
        return ModeloPersonaje.findAll()
    }

    function findById (id) {
        return ModeloPersonaje.findById(id)
    }

    return {
        create,
        findAll,
        findById,
    }
}