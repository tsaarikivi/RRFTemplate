import React from 'react'
import { IndexLink } from 'react-router'

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                Page not found 404
                <IndexLink to="/">Home</IndexLink>
            </div>
        )
    }
}
