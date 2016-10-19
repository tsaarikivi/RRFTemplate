import React from 'react'

import Auth from './auth'
import Static from './static'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Auth />
        <Static />
        <div className="body-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
