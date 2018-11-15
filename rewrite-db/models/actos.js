'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

    module.exports = function setupModeloActos (config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('actos', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        escenario: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
}