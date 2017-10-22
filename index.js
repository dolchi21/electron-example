var Task = require('async-task')

async function main() {
    var task = Task.instantiate('./src/tasks/compute.js')
    var res = await task.execute()
    console.log(res)
    //task.terminate()
    return res
}
