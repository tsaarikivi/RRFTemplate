import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './components/home'
import Layout from './components/layout'
import Login from './components/login'
import NotFound from './components/notFound'

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={Login} />
        <Route path="/home" component={Home} />
        <Route path="*" component={NotFound} />
    </Route>
)
