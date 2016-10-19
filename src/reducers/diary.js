import types from '../constants/auth';

const INITIAL_STATE = {
    users: {}
};

export default (state = INITIAL_STATE, args) => {
    switch (args.type) {
        case types.FETCH_USERS:
            return Object.assign({}, state, { users: args.payload });
        default:
            return state;
    }
}
