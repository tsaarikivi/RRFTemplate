import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import auth from '../../helpers/auth'
import dbh from '../../helpers/db'

import authTypes from '../../constants/auth'

class Login extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-fade-line">TESTING</div>
                <div className="card-line">
                    {this.renderCurrentUser()}
                </div>
                <div className="card-line">
                    {this.renderError()}
                </div>
                <div className="card-row">
                    <button onClick={() => this.login()}>LOGIN</button>
                </div>
                <div className="card-row">
                    <button onClick={() => this.register()}>REGISTER</button>
                </div>
                <div className="card-row">
                    <button onClick={() => this.logout()}>LOGOUT</button>
                </div>
                <div className="card-row">
                    <button onClick={() => this.deleteUser()}>DELETE USER</button>
                </div>
                <div className="card-row">
                    <button onClick={() => this.push()}>PUSH</button>
                </div>
                <div className="card-row">
                    <button onClick={() => this.on()}>ON</button>
                </div>
                <div className="card-row">
                    <button onClick={() => this.off()}>OFF</button>
                </div>
                <div className="card-row">
                    <button onClick={() => this.contains()}>CONTAINS</button>
                </div>
            </div >
        )
    }

    contains() {
        this.props.dbh.contains({
            ref: "users/-KTtsrI4mEcjVRbAhnOS"
        })
    }

    renderCurrentUser() {
        let { user } = this.props
        if (user) {
            return "current user : " + this.props.user.email
        }
        return "no current user"
    }

    renderError() {
        let { error } = this.props
        if (error) {
            return "last error : " + this.props.error
        }
        return "no error"
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
        console.log(this.props.diary.users)
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
        user: state.auth,
        error: state.error,
        diary: state.diary
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: bindActionCreators(auth, dispatch),
        dbh: bindActionCreators(dbh, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
