import firebase from 'firebase'

function on(args) {

}

function once(args) {
    return dispatch => {
        firebase.database().ref(args.ref).once('value')
            .then(data => {
                dispatch({
                    type: args.type,
                    payload: data.val()
                })
            })
            .catch(error => {
                console.error(error)
            })
    }
}

function off(args) {

}

function push(args) {

}

function set(args) {

}

function update(args) {

}

function remove(args) {

}

export const actions = {
    on,
    once,
    off,
    push,
    set,
    update,
    remove
}