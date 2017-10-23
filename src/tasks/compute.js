var Rx = require('rxjs')
var sequelize = require('../../sequelize')
var Task = require('async-task')

var TaskData = sequelize.model('Task')

var T = Task.create()

const longComputation = () => {
    let sum = 0
    for (let i = 0; i < 1e7; i++) {
        sum += i
    }
    return sum
}

async function main() {

    var td = await TaskData.create({
        pid: process.pid,
        name: 'compute.js'
    })

    var documents = longComputation()
    await T.resolve(documents)

    await td.update({ exitCode: 0 })

}

T.main(() => {
    main().catch(err => {
        T.message(err)
    })
})
