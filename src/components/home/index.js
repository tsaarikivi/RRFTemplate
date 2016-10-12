import React from 'react'
import { IndexLink } from 'react-router'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                Home <IndexLink to="/">Testing</IndexLink>
            </div>
        )
    }
}
