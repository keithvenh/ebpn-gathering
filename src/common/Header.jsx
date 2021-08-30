import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: props.view
        }
    }

    navItemClick(event) {
        this.setState({
            activeLink: event.target.innerHTML.toLowerCase()
        })
        this.props.navClick(event);
    }

    render() {
        return (
            <header className="header">

                <h1 className="app-title">EBPN Gathering</h1>
                <h2 className="app-dates">August 31 - September 3</h2>

                <a href="https://us02web.zoom.us/j/81371955991" target="_blank" rel='noreferrer' className='zoom-link'>
                    Join Us On Zoom!
                </a>

                <nav className="navbar">
                    <ul className="nav-list">
                        <div className='nav-item-container'>
                            <li className={`nav-item active-${this.props.view === 'schedule'}`} onClick={(event) => this.navItemClick(event)}>Schedule</li>
                            <li className={`nav-item active-${this.props.view === 'partners'}`} onClick={(event) => this.navItemClick(event)}>Partners</li>
                        </div>
                        <div className='nav-item-container'>
                            <li className={`nav-item active-${this.props.view === 'hubs'}`} onClick={(event) => this.navItemClick(event)}>Hubs</li>
                            <li className={`nav-item active-${this.props.view === 'resources'}`} onClick={(event) => this.navItemClick(event)}>Resources</li>
                        </div>
                    </ul>
                </nav>

                {this.state.activeLink === "schedule" && <p className="timezone">*All times are Hawaii Standard Time*</p>}

            </header>
        )
    }
}

export default Header;