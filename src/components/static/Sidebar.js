import React from 'react'
import { Link } from 'react-router'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <span className="user-image">User</span>
                <Link to="/auth/logout" className="small-link">logout</Link>
                <Link to="/user" className="small-link">userinfo</Link>
                <nav>
                    <ul className="nav">
                        <li className="nav-link"><Link to="/auth">Auth</Link></li>
                        <li className="nav-link"><Link to="/db">Db</Link></li>
                        <li className="nav-link"><Link to="/notifications">Notifications</Link></li>
                        <li className="nav-link"><Link to="/queries">Queries</Link></li>
                        <li className="nav-link"><Link to="/user">User</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
