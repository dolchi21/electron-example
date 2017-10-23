var Task = require('async-task')
var DB = require('./sequelize')

var TaskData = DB.model('Task')

async function main() {
    
    var td = await TaskData.create({ pid: process.pid })

    var task = Task.instantiate('./src/tasks/compute.js')
    
    td.update({ exitCode: 0 })

    var res = await task.execute()
    console.log(res)
    return res
    
}
