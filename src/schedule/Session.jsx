import React from 'react';
import Subsession from './Subsession';

class Session extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            expanded: false,
            startTime: props.session.start_tims,
            endTime: props.session.end_time,
            time: props.session.time,
            speaker: props.session.speaker,
            topic: props.session.topic,
            zoom_url: props.session.zoom_url,
            type_of: props.session.type_of,
            subsessions: props.session.subsessions,
            code: props.session.code
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState( {
            expanded: this.state.expanded ? false : true
        })
    }

    render() {
        return (
            <div className={`session`}>
                <h4 onClick={this.state.type_of !== "Break" ? this.handleClick : undefined}><i className={`fas ${this.state.expanded ? "fa-caret-down" : "fa-caret-right"}`}></i> <span className='session-time'>{this.state.time}</span> || {this.state.type_of}</h4>
                {this.state.expanded && 
                    <div className="session-details">
                        {this.state.topic &&
                            <div className='session-info'>
                                <p className="topic">{this.state.topic}</p>
                                <p className="speaker">{this.state.speaker}</p>
                            </div>
                        }
                        {this.state.code && <p className='zoom-pwd'>ALL PASSWORDS: EBPN</p>}
                        {this.state.zoom_url && <a className='zoom-link zoom-link-sm' href={this.state.zoom_url} target='_blank' rel='noreferrer'>Join Session</a>}
                        {this.state.subsessions && 
                            this.state.subsessions.map(sub => <Subsession details={sub} key={sub.topic}/>)
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Session;