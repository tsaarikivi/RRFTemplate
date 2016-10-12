import authTypes from '../constants/auth'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, args) => {
    switch (args.type) {
        case authTypes.LOGIN + '_ERROR':
            return 'Login error'
        case authTypes.LOGOUT + '_ERROR':
            return 'Logout error'
        case authTypes.REGISTER + '_ERROR':
            return 'Register error'
        case authTypes.ADD_USER + '_ERROR':
            return 'Add user error'
        case authTypes.FETCH_USERS + '_ERROR':
            return 'Fetch users error'
        case authTypes.DELETE_USER + '_ERROR':
            return 'Delete user error'
        default:
            return state
    }
}
