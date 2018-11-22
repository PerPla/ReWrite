'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')
const bcrypt = require('bcrypt')

module.exports = function setupModeloUsuario (config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('usuario', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contrasena: {
            type: Sequelize.STRING,
            allowNull: false
        },
        avatar: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        hooks: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync()
                user.contrasena = bcrypt.hashSync(user.contrasena, salt)
            },
            beforeUpdate: (user) => {
                const salt = bcrypt.genSaltSync()
                user.contrasena = bcrypt.hashSync(user.contrasena, salt)
            }
        },
        instanceMethods: {
            validPassword: function(password, hash) {
                return bcrypt.compareSync(password, hash, console.log())
            }
        }
    })
}