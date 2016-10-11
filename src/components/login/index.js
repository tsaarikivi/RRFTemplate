import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import auth from '../../helpers/auth'
import dbh from '../../helpers/db'

import authTypes from '../../constants/auth'

class Login extends React.Component {
    render() {
        return (
            <div>
                Login
                <button onClick={() => this.login()}>login</button>
                <button onClick={() => this.register()}>register</button>
                <button onClick={() => this.logout()}>logout</button>
                <button onClick={() => this.deleteUser()}>deleteUser</button>
                <button onClick={() => this.push()}>push</button>
                <button onClick={() => this.on()}>on</button>
                <button onClick={() => this.off()}>off</button>
                {this.renderError()}
            </div>
        )
    }

    renderError() {
        let { error } = this.props
        if (error) {
            return <span>
                {this.props.error}
            </span>
        }
        return null
    }

    login() {
        this.props.auth.login({
            user: 'tero@saa.com',
            password: 'salasana'
        })
    }

    register() {
        this.props.auth.register({
            user: 'tero@saa.com',
            password: 'salasana'
        })
    }

    logout() {
        this.props.auth.logout()
    }

    push() {
        this.props.dbh.push({
            ref: '/users',
            type: authTypes.ADD_USER,
            data: {
                username: 'tero'
            }
        })
    }

    on() {
        this.props.dbh.on({
            ref: '/users',
            type: authTypes.FETCH_USERS
        })
    }

    off() {
        this.props.dbh.off({
            ref: '/users',
            type: authTypes.FETCH_USERS
        })
    }

    deleteUser() {
        this.props.auth.deleteUser()
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: bindActionCreators(auth, dispatch),
        dbh: bindActionCreators(dbh, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
