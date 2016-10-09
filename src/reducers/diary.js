import { types } from '../constants/diary'

const INITIAL_STATE = {
    logs: {}
}

export default (state = INITIAL_STATE, args) => {
    switch (args.type) {
        case types.FETCH_ALL_LOGS:
            return Object.assign({}, state, {logs: args.payload})
        default:
            return state
    }
}