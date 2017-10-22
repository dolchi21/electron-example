import React from 'react'
import { connect } from 'react-redux'

import { runSQL } from '../services/database'

var ExecuteButton = props => <button onClick={runSQL}>run</button>

export default ExecuteButton
