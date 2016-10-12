import { combineReducers } from 'redux'

import diary from './reducers/diary'
import error from './reducers/error'
import { reducer as form } from 'redux-form'
import auth from './reducers/auth'

const store = combineReducers({
    form,
    auth,
    diary,
    error
})

export default store
