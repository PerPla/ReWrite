'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

    module.exports = function setupModeloLirico(config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('lirico', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    })
}