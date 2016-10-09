import React from 'react'
import { Route, IndexRoute  } from 'react-router'

import home from './components/home'
import layout from './components/layout'

/*import login from './components/login'
<Route path="login" component={login} />
import diary from './components/diary'
<Route path="diary" component={diary} />*/

export default (
    <Route path="/" component={layout}>
        <IndexRoute component={home}/>
    </Route>
)