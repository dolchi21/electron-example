import React from 'react'
import { connect } from 'react-redux'

export default connect(state => {
    return {
        value: state.data.sql
    }
}, dispatch => {
    return {
        onChange(ev) {
            var value = ev.target.value
            dispatch({
                type: 'SET',
                payload: {
                    sql: value
                }
            })
        }
    }
})(props => {
    return <input type="text" onChange={props.onChange} defaultValue={props.value} />
})
