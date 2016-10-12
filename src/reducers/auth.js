import types from '../constants/auth'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, args) => {
    switch (args.type) {
        case types.LOGIN:
            return args.payload
        case types.REGISTER:
            return args.payload
        case types.LOGOUT:
            return null
        case types.DELETE_USER:
            return null
        default:
            return state
    }
}
