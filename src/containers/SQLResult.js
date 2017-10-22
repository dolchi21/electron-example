import React from 'react'
import { connect } from 'react-redux'

export default connect(state => {
    return {
        rs: state.data.sqlResult
    }
})(props => (
    <pre>
        {JSON.stringify(props.rs, null, 2)}
    </pre>
))
