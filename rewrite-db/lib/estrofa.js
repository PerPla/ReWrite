'use strict'

module.exports = function setupEstrofa(ModeloEstrofa) {
    let modelo = ModeloEstrofa
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

    function findTipos (id) {
        return ModeloEstrofa.findById(id).getTipos()
    }

    return {
        create,
        findAll,
        findById,
        modelo,
        findTipos
    }
}