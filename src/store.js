import { combineReducers } from 'redux'

import diary from './reducers/diary'
import { reducer as form } from 'redux-form'
import user from './reducers/user'

const store = combineReducers({
    form,
    user,
    diary
})

export default store