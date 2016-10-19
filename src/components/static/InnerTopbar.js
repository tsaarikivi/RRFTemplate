import React from 'react'

import { Link } from 'react-router'

export default class InnerTopbar extends React.Component {
    render() {
        return (
            <div className="inner-topbar">
                <h2>{this.props.title}</h2>
                {this.renderNav()}
            </div>
        )
    }

    renderNav() {
        if (this.props.links) {
            return  <nav>
                        <ul>
                            {this.renderLinks()}
                        </ul>
                    </nav>
        }
        return null
    }

    renderLinks() {
        let ret = []
        let i = 0
        for (let link of this.props.links) {
            ret.push(<li key={i++}><Link to={link.ref}>{link.title}</Link></li>)
        }
        return ret
    }
}
