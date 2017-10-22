import { exec, spawn } from 'child_process'
import store from '../store'

function shell(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
            err ? reject(stderr) : resolve(stdout)
        })
    })
}

export function run(cmd) {
    return shell(cmd).then(stdout => {
        store.dispatch({
            type: 'SET',
            payload: { stdout }
        })
    }).catch(stderr => {
        store.dispatch({
            type: 'SET',
            payload: { stderr }
        })
    })
}
