'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModelArticulo(config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('articulo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        resumen: {
            type: Sequelize.STRING,
            allowNull: false
        },
        autores: {
            type: Sequelize.STRING,
            allowNull: false
        },
        materiales: {
            type: Sequelize.STRING,
            allowNull: false
        },
        metodos: {
            type: Sequelize.STRING,
            allowNull: false
        },
        resultados: {
            type: Sequelize.STRING,
            allowNull: false
        },
        discusiones: {
            type: Sequelize.STRING,
            allowNull: false
        },
        conclusiones: {
            type: Sequelize.STRING,
            allowNull: false
        },
        referencia: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
}