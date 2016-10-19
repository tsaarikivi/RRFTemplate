import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import Store from './store'
import routes from './routes'
import './styles/index.css'

// init firebase
import firebase from 'firebase'
/*STAGE CONFIG*/
const fbconfig = {
    apiKey: "AIzaSyCxYOmkghssxw-0PidNwGAWY3G7ekhkjCg",
    authDomain: "reservation-stage.firebaseapp.com",
    databaseURL: "https://reservation-stage.firebaseio.com",
    storageBucket: "reservation-stage.appspot.com",
    messagingSenderId: "346485514187"
}
/*PRODUCTION CONFIG
const fbconfig = {
}*/
firebase.initializeApp(fbconfig)

// create store with devtools
// devtools should be exerted in production?
let store = createStore(Store, composeWithDevTools(applyMiddleware(thunk)))

// render app
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
)
