'use strict'

module.exports = function setupEnsayo(ModeloEnsayo, ModeloObra, ModeloUsuario) {

    async function create (ensayo) {
        const result = await ModeloEnsayo.create(ensayo, {
            include: [{
                model: ModeloObra,
                as: 'obra',
                include: [{
                    model: ModeloUsuario,
                    as: 'usuario'
                }]
            }]
        })
        return result.toJSON()
    }

    function findAll () {
        return ModeloEnsayo.findAll({
            include: [{
                model: ModeloObra,
                as: 'obra',
                include: [{
                    model: ModeloUsuario,
                    as: 'usuario'
                }]
            }]
        })
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