var Sequelize = require('sequelize')

function connection() {
    var sequelize = new Sequelize('gui', 'root', 'incorrect', {
        dialect: 'sqlite',
        storage: 'db.sqlite'
    })

    var Task = sequelize.define('Task', {
        pid: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING
        },
        exitCode: {
            type: Sequelize.INTEGER
        }
    })

    return sequelize
}

module.exports = connection()
