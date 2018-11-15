'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModelReferencias(config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('referencias', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipoRef: {
            type: Sequelize.STRING,
            allowNull: false
        },
        autor: {
            type: Sequelize.STRING,
            allowNull: false
        },
        año: {
            type: Sequelize.STRING,
            allowNull: false
        },
        datos: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}