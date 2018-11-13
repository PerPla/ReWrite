'use strict'

module.exports = function setupUsuario(ModeloUsuario) {

    async function createOrUpdate (usuario) {
        const cond = {
            where: {
                usuario: usuario.usuario
            }
        }

        const usuarioExistente = await ModeloUsuario.findOne(cond)

        if(usuarioExistente) {
            const updated = await ModeloUsuario.update(usuario, cond)
            return updated ? ModeloUsuario.findOne(cond): usuarioExistente
        }

        const result = await ModeloUsuario.create(usuario)
        return result.toJSON()

    }

    function findAll () {
        return ModeloUsuario.findAll()
    }

    function findById (id) {
        return ModeloUsuario.findById(id)
    }

    function findByUsuario (usuario) {
        return ModeloUsuario.findOne({
            where: {
                usuario
            }
        })
    }

    return {
        createOrUpdate,
        findAll,
        findById,
        findByUsuario
    }
}