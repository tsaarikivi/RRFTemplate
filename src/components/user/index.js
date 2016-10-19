import React from 'react'

import InnerTopbar from '../static/InnerTopbar'

export default class User extends React.Component {
    render() {
        return (
            <div>
                <InnerTopbar title="User" />
                <div className="card">
                    <div className="card-fade-line">USERDATA</div>
                    <div className="card-line">UserDaatta</div>
                </div>
            </div>
        )
    }
}
