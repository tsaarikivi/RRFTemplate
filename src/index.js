import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import Store from './store'
import routes from './routes'
import './styles/index.css'

// init firebase
import firebase from 'firebase'
const stageConfig = {
    apiKey: "AIzaSyATwK-J3bFj4_0tvPH7MusCu4j0owfUn9Y",
    authDomain: "mobx-test.firebaseapp.com",
    databaseURL: "https://mobx-test.firebaseio.com"
}
const prodConfig = {
}
// CHOOSE A CONFIG
firebase.initializeApp(stageConfig)
//firebase.initializeApp(prodConfig)

/**Firebase cli commands
 * npm run buíld && firebase use stage && firebase deploy
 * firebase deploy --only database
 */

// create store
let store = createStore(Store, applyMiddleware(thunk))

// render app
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
)
