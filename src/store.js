import { combineReducers } from 'redux'

import diary from './reducers/diary'
import error from './reducers/error'
import { reducer as form } from 'redux-form'
import user from './reducers/user'

const store = combineReducers({
    form,
    user,
    diary,
    error
})

export default store
