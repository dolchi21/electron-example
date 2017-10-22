var Rx = require('rxjs')
var Task = require('async-task')

var T = Task.create()

const longComputation = () => {
    let sum = 0
    for (let i = 0; i < 1e7; i++) {
        sum += i
    }
    return sum
}

T.main(async function main() {

    var documents = longComputation()
    await T.resolve(documents)

})

setInterval(() => {
    console.log(process.pid)
}, 1000)