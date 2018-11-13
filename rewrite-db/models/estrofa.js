'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModeloEstrofa (config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('estrofa', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        versos: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}