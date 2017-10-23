import sequelize from '../../sequelize'
import store from '../store'

export default sequelize

export function runSQL() {
    var { data } = store.getState()
    return sequelize.query(data.sql, { type: 'SELECT' }).then(rs => {
        store.dispatch({
            type: 'SET',
            payload: {
                sqlResult: rs
            }
        })
    })
}

export function sync() {
    return sequelize.sync({
        force: true
    })
}
