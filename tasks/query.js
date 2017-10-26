var Task = require('async-task')

var sequelize = require('../sequelize')

var TaskData = sequelize.model('Task')

var T = Task.create()
T.main(async function main() {

    var td = await TaskData.create({
        pid: process.pid,
        name: 'query.js'
    })

    var sql = T.get('sql')
    var options = T.get('options')

    if (!sql) {
        await T.reject(new Error('SQLNotSet'))
        await td.update({ exitCode: 400 })
        return
    }

    var rs = await sequelize.query(sql, options)

    await T.resolve(documents)
    await td.update({ exitCode: 0 })

})
