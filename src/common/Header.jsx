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

                <a href="https://us02web.zoom.us/j/8540118317" target="_blank" rel='noreferrer' className='zoom-link'>
                    Join Us On Zoom!
                </a>

                <nav className="navbar">
                    <ul className="nav-list">
                        <li className={`nav-item active-${this.state.activeLink === 'schedule'}`} onClick={(event) => this.navItemClick(event)}>Schedule</li>
                        <li className={`nav-item active-${this.state.activeLink === 'partners'}`} onClick={(event) => this.navItemClick(event)}>Partners</li>
                        <li className={`nav-item active-${this.state.activeLink === 'hubs'}`} onClick={(event) => this.navItemClick(event)}>Hubs</li>
                    </ul>
                </nav>

                {this.state.activeLink === "schedule" && <p className="timezone">*All times are Hawaii Standard Time*</p>}

            </header>
        )
    }
}

export default Header;