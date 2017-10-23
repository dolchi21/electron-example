import React from 'react'

import { sync } from '../../services/database'

export default props => <button onClick={sync}>sync db</button>
