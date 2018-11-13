'use strict'

module.exports = function setupTipo(ModeloTipo) {

    async function createOrUpdate (tipo) {
        const cond = {
            where: {
                nombre: tipo.nombre
            }
        }

        const tipoExistente = await ModeloTipo.findOne(cond)

        if(tipoExistente) {
            const updated = await ModeloTipo.update(obra, cond)
            return updated ? ModeloTipo.findOne(cond): tipoExistente
        }

        const result = await ModeloTipo.create(tipo)
        return result.toJSON()

    }

    function findAll () {
        return ModeloTipo.findAll()
    }

    function findById (id) {
        return ModeloTipo.findById(id)
    }

    function findByNombre(nombre) {
        return ModeloTipo.findOne({
            where: {
                nombre
            }
        })
    }

    return {
        createOrUpdate,
        findAll,
        findById,
        findByNombre
    }
}