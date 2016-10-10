import firebase from 'firebase'

function on(args) {
    return dispatch => {
        firebase.database().ref(args.ref).on('value', data => {
            console.log("database on")
            dispatch({
                type: args.type,
                payload: data.val()
            })
        }, error => {
            console.error(error)
            dispatch({
                type: args.type+'_ERROR'
            })
        })
    }
}

function once(args) {
    return dispatch => {
        firebase.database().ref(args.ref).once('value')
            .then(data => {
                console.log("database once")
                dispatch({
                    type: args.type,
                    payload: data.val()
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: args.type+'_ERROR'
                })
            })
    }
}

function off(args) {
    return dispatch => {
        firebase.database().ref(args.ref).off('value')
        console.log("database ref off")
        dispatch({
            type: args.type
        })
    }
}

function push(args) {
    return dispatch => {
        firebase.database().ref(args.ref).push(args.data)
            .then(() => {
                console.log("database push")
                dispatch({
                    type: args.type
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: args.type+'_ERROR'
                })
            })
    }
}

function set(args) {
    return dispatch => {
        firebase.database().ref(args.ref).set(args.data)
            .then(() => {
                console.log("database set")
                dispatch({
                    type: args.type
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: args.type+'_ERROR'
                })
            })
    }
}

function update(args) {
    return dispatch => {
        firebase.database().ref(args.ref).update(args.data)
            .then(() => {
                console.log("database update")
                dispatch({
                    type: args.type
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: args.type+'_ERROR'
                })
            })
    }
}

function remove(args) {
    return dispatch => {
        firebase.database().ref(args.ref).remove()
            console.log("databse remove")
            .then(() => {
                dispatch({
                    type: args.type
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: args.type+'_ERROR'
                })
            })
    }
}

const db = {
    on,
    once,
    off,
    push,
    set,
    update,
    remove
}

export default db
