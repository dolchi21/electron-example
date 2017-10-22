import React from 'react'
import { connect } from 'react-redux'

import * as Shell from '../services/shell'

export default connect(state => {
    var { stdout, stderr } = state.data
    return {
        stdout, stderr
    }
})(({ stdout, stderr }) => (
    <div>
        <div>
            <input />
        </div>
        <div>
            <pre>{stdout}</pre>
            <pre>{stderr}</pre>
        </div>
    </div>
))
