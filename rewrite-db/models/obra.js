'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModeloObra(config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('obra', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        numero_errores: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    })
}