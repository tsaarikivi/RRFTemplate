import firebase from 'firebase'

import authTypes from '../constants/auth'

function login(args) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(args.user, args.password)
            .then(() => {
                console.log("login success")
                dispatch({
                    type: authTypes.LOGIN
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: authTypes.LOGIN+'_ERROR'
                })
            })
    }
}

function register(args) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(args.user, args.password)
            .then(() => {
                console.log("register success")
                dispatch({
                    type: authTypes.REGISTER
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: authTypes.REGISTER+'_ERROR'
                })
            })
    }
}

function logout(args) {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => {
                console.log("logut success")
                dispatch({
                    type: authTypes.LOGOUT
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: authTypes.LOGOUT+'_ERROR'
                })
            })
    }
}

// TODO
// function deleteUser(args) {}
// function reauthenticate(args) {}

const auth = {
    login,
    register,
    logout
}

export default auth
