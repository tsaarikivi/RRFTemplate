import React from 'react'

import InnerTopbar from '../static/InnerTopbar'

export default class Db extends React.Component {
    render() {
        return (
            <div>
                <InnerTopbar title="Db" links={this.links} />
                {this.props.children}
            </div>
        )
    }

    links = [
        {
            ref: "/db/push",
            title: "Push"
        },
        {
            ref: "/db/on",
            title: "On"
        },
        {
            ref: "/db/off",
            title: "Off"
        }
    ]
}
