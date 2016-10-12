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
                    type: authTypes.LOGIN + '_ERROR'
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
                    type: authTypes.REGISTER + '_ERROR'
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
                    type: authTypes.LOGOUT + '_ERROR'
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
                        type: authTypes.DELETE_USER + '_ERROR'
                    })
                })
        } else {
            console.error("no current user")
            dispatch({
                type: authTypes.DELETE_USER + '_ERROR'
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
