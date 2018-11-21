'use strict'

module.exports = function setupObra(ModeloObra, ModeloUsuario) {

    async function createOrUpdate (obra) {
        const cond = {
            where: {
                titulo: obra.titulo
            }
        }

        const obraExistente = await ModeloObra.findOne(cond)

        if(obraExistente) {
            const updated = await ModeloObra.update(obra, cond)
            return updated ? ModeloObra.findOne(cond): obraExistente
        }

        const result = await ModeloObra.create(obra)
        return result.toJSON()

    }

    function findAll () {
        return ModeloObra.findAll({
            include: [{
                model: ModeloUsuario,
                as: 'usuario'
            }]
        })
    }

    function findById (id) {
        return ModeloObra.findById(id)
    }

    function findByTitulo (titulo) {
        return ModeloObra.findOne({
            where: {
                titulo
            }
        })
    }

    function findByFecha (fecha) {
        return ModeloObra.find({
            where: {
                createdAt: fecha
            }
        })
    }

    return {
        createOrUpdate,
        findAll,
        findById,
        findByTitulo,
        findByFecha
    }
}