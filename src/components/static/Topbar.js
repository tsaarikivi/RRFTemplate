import React from 'react'

export default class Topbar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <span className="list-btn topbar-item">list</span>
                <span className="logo topbar-item">logo</span>
                <span className="cart topbar-item">cart</span>
            </div>
        )
    }
}
