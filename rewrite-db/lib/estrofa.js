'use strict'

module.exports = function setupEstrofa(ModeloEstrofa, ModeloTipo) {
    let modelo = ModeloEstrofa
    async function create (estrofa) {
        const result = await ModeloObra.create(estrofa)
        return result.toJSON()
    }

    async function findAll () {
        return ModeloEstrofa.findAll({
            include: [{
                model: ModeloTipo,
                as: 'tipo'
            }]
        })
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