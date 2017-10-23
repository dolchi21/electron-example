import { createStore, combineReducers } from 'redux'

var reducer = combineReducers({
    data: (state = {}, action) => {
        var { type, payload } = action
        switch (type) {
            case 'SET': {
                return Object.assign({}, state, payload)
            }
            default: return state
        }
    }
})

var store = createStore(reducer, {
    data: {
        sql: 'SELECT * FROM "Tasks"'
    }
})

export default store
