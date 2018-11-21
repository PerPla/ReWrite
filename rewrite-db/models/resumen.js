'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModelResumen(config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('resumen', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contenido: {
            type: Sequelize.STRING,
            allowNull: false
        },
        claves: {
            type: Sequelize.STRING,
            allowNull: false
        },
        referencia: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
}