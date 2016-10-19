import React from 'react'

import InnerTopbar from '../static/InnerTopbar'

export default class Queries extends React.Component {
    render() {
        return (
            <div>
                <InnerTopbar title="Queries" />
                <div className="card">
                    <div className="card-fade-line">Query</div>
                    <div className="card-line">Query</div>
                </div>
            </div>
        )
    }
}
