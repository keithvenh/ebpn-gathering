import React from 'react';
import Session from './Session';

class SessionDay extends React.Component {
    constructor(props) {
        super(props)
        const currentMonth = new Date().getMonth() + 1
        const currentDay = new Date().getDate()
        const today =  props.date === `${currentMonth}/${currentDay}/2021`
        this.state = {
            today: today,
            display: props.display,
            date: props.date,
            expanded: today,
            sessions: props.sessions
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            expanded: this.state.expanded ? false : true
        })
    }

    render() {
        return(
            <div className='sessionDay'>
                <div className='day-header' onClick={this.handleClick}>
                    <h3 className={`today-${this.state.today}`}><i className={`fas ${this.state.expanded ? "fa-caret-down" : "fa-caret-right"}`}></i> {this.state.display}</h3>
                </div>
                {this.state.expanded && this.props.sessions.map(sess => <Session key={sess.id} session={sess}/>)}
            </div>
        )
    }

}

export default SessionDay;