import React from 'react'

import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default class Static extends React.Component {
    render() {
        return (
            <div>
                <Topbar />
                <Sidebar />
            </div>
        )
    }
}
