import firebase from 'firebase'

import authTypes from '../constants/auth'

function login(args) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(args.user, args.password)
            .then(user => {
                console.log("login success")
                dispatch({
                    type: authTypes.LOGIN,
                    payload: user
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: authTypes.LOGIN + '_ERROR',
                    payload: error
                })
            })
    }
}

function register(args) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(args.user, args.password)
            .then(user => {
                console.log("register success")
                dispatch({
                    type: authTypes.REGISTER,
                    payload: user
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: authTypes.REGISTER + '_ERROR',
                    payload: error
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
                    type: authTypes.LOGOUT + '_ERROR',
                    payload: error
                })
            })
    }
}

function deleteUser() {
    return dispatch => {
        const user = firebase.auth().currentUser
        if (user) {
            user.delete()
                .then(() => {
                    console.log("delete user")
                    dispatch({
                        type: authTypes.DELETE_USER
                    })
                }, error => {
                    console.error(error)
                    dispatch({
                        type: authTypes.DELETE_USER + '_ERROR',
                        payload: error
                    })
                })
        } else {
            console.error("no current user")
            dispatch({
                type: authTypes.DELETE_USER + '_ERROR',
                payload: { message: "no current user" }
            })
        }
    }
}

const auth = {
    login,
    register,
    logout,
    deleteUser
}

export default auth
