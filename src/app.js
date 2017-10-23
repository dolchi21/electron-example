import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import ExecSQLButton from './containers/ExecSQLButton'
import SQLStatement from './containers/SQLStatement'
import SQLResult from './containers/SQLResult'
import SyncButton from './containers/DB/SyncButton'
import Commands from './containers/Commands'

store.subscribe(() => console.log(store.getState()))

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h3>App</h3>
                    <div>
                        <SQLStatement />
                        <ExecSQLButton />
                        <SyncButton />
                        <SQLResult />
                    </div>
                    <div>
                        <Commands />
                    </div>
                </div>
            </Provider >
        )
    }
}

export default App

export function mount(id = 'app') {
    ReactDOM.render(<App />, document.getElementById(id))
}
mount()