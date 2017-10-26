import path from 'path'
import Task from 'async-task'

import store from '../store'

export async function query(sql, options) {
    var module = path.resolve('./tasks/query.js')

    var task = await Task.createTaskManager(module)

    await task.set('sql', sql)
    if (options) await task.set('options', options)

    var rs = await task.execute()
    return rs
}

export function runSQL() {
    var { data } = store.getState()
    return query(data.sql, { type: 'SELECT' }).then(rs => {
        store.dispatch({
            type: 'SET',
            payload: {
                sqlResult: rs
            }
        })
    })
}

export function sync() {
    debugger
    //return sequelize.sync({ force: true })
}

export default {
    query
}
