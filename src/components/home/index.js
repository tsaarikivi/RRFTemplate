import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { types as diaryTypes } from '../../constants/diary'
import { actions as dbActionCreators } from '../../actions/db'

class Home extends React.Component {

    componentWillMount() {
        this.props.dbActions.once({
            ref: 'logs',
            type: diaryTypes.FETCH_ALL_LOGS,
        })
    }

    render() {
        return (
        <div>
            <Link to="login">Login</Link>
            <Link to="diary">Diary</Link>
            <ul>
                {this.renderLogs()}
            </ul>
        </div>
        )
    }

    renderLogs() {
        let logs = this.props.diary
        let output = []
        for (let log in logs) {
            console.log("LOG",log)
            output.push(this.renderLog(log))
        }
        return output
    }

    renderLog(log) {
        return (
            <li key={log.key}>
                <span>{log.title}</span>
                <span>{log.content}</span>
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        diary: state.diary
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dbActions: bindActionCreators(dbActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)