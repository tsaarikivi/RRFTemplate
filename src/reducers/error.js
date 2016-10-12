import authTypes from '../constants/auth'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, args) => {
    switch (args.type) {
        case authTypes.LOGIN + '_ERROR':
            return args.payload.message
        case authTypes.LOGOUT + '_ERROR':
            return args.payload.message
        case authTypes.REGISTER + '_ERROR':
            return args.payload.message
        case authTypes.ADD_USER + '_ERROR':
            return args.payload.message
        case authTypes.FETCH_USERS + '_ERROR':
            return args.payload.message
        case authTypes.DELETE_USER + '_ERROR':
            return args.payload.message
        default:
            return INITIAL_STATE
    }
}
