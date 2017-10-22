import React from 'react'
import { connect } from 'react-redux'

import * as Shell from '../services/shell'

var value

export default connect(state => {
    var { stdout, stderr } = state.data
    return {
        stdout, stderr
    }
})(({ stdout, stderr }) => (
    <div>
        <div>
            <input onChange={ev => value = ev.target.value} onKeyDown={ev => {
                if (ev.keyCode === 13) runCurrent()
            }} />
            <button onClick={runCurrent}>exec</button>
        </div>
        <div>
            <pre>{stdout}</pre>
            <pre>{stderr}</pre>
        </div>
    </div>
))

function runCurrent() {
    Shell.run(value)
}