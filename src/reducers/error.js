import authTypes from '../constants/auth'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, args) => {
    switch (args.type) {
        case authTypes.REGISTER+'_ERROR':
            return 'Register error'
        default:
            return state
    }
}
