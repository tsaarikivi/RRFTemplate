import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Auth from './components/authcom'
import Login from './components/authcom/Login'
import Logout from './components/authcom/Logout'
import Register from './components/authcom/Register'

import Db from './components/db'
import Push from './components/db/Push'
import On from './components/db/On'
import Off from './components/db/Off'

import Notifications from './components/notifications'
import Appnotification from './components/notifications/Appnotification'
import Emailnotification from './components/notifications/Emailnotification'
import Textnotification from './components/notifications/Textnotification'

import Layout from './components/layout'
import NotFound from './components/notFound'
import User from './components/user'
import Queries from './components/queries'

export default (
    <Route path="/" component={Layout}>
        <IndexRedirect to="/auth" />
        <Route path="/auth" component={Auth}>
            <IndexRedirect to="/auth/login" />
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/logout" component={Logout} />
            <Route path="/auth/register" component={Register} />
        </Route>
        <Route path="/db" component={Db}>
            <IndexRedirect to="/db/push" />
            <Route path="/db/push" component={Push} />
            <Route path="/db/on" component={On} />
            <Route path="/db/off" component={Off} />
        </Route>
        <Route path="/notifications" component={Notifications}>
            <IndexRedirect to="/notifications/appnotification" />
            <Route path="/notifications/appnotification" component={Appnotification} />
            <Route path="/notifications/emailnotification" component={Emailnotification} />
            <Route path="/notifications/textnotification" component={Textnotification} />
        </Route>
        <Route path="/queries" component={Queries} />
        <Route path="/user" component={User} />
        <Route path="*" component={NotFound} />
    </Route>
)
