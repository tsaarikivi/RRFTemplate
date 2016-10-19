import React from 'react'

import InnerTopbar from '../static/InnerTopbar'

export default class Notifications extends React.Component {
    render() {
        return (
            <div>
                <InnerTopbar title="Notifications" links={this.links} />
                {this.props.children}
            </div>
        )
    }

    links = [
        {
            ref: "/notifications/appnotification",
            title: "Appnotification"
        },
        {
            ref: "/notifications/emailnotification",
            title: "Emailnotification"
        },
        {
            ref: "/notifications/textnotification",
            title: "Textnotification"
        }
    ]
}
