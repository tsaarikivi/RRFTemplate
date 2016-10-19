import React from 'react'

import InnerTopbar from '../static/InnerTopbar'

export default class Authcom extends React.Component {
    render() {
        return (
            <div>
                <InnerTopbar title="Auth" links={this.links} />
                {this.props.children}
            </div>
        )
    }

    links = [
        {
            ref: "/auth/login",
            title: "Login"
        },
        {
            ref: "/auth/register",
            title: "Register"
        },
        {
            ref: "/auth/logout",
            title: "Logout"
        }
    ]
}
