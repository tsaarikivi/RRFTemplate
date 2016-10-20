import React from 'react'

import Auth from './auth'
import Topbar from './static/Topbar'
import Sidebar from './static/Sidebar'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Auth />
        <Topbar />
        <Sidebar />
        <div className="body-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
