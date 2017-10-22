import React from 'react'
import { connect } from 'react-redux'

export default connect(state => {
    return {}
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
    return <input type="text" onChange={props.onChange} />
})
