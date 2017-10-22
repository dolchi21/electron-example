import Sequelize from 'sequelize'
import store from '../store'

export function connection() {
    var sequelize = new Sequelize('master', 'root', 'password', {
        dialect: 'sqlite',
        storage: './db.sqlite'
    })
    return sequelize
}
var sequelize = connection()

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