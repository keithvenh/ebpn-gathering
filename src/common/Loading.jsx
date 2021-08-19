import React from 'react';

const logo = require('../assets/images/logo.svg').default;
let logoStyle = {
    maxWidth: '500px',
    marginBottom: '100px'
}

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logoStyle: logoStyle
        }
    }

    componentDidMount() {
        let loadScreen = document.getElementById('loading-screen');
        setTimeout(() => loadScreen.style.left = '100vw', 3000);
        setTimeout(() => loadScreen.style.display = 'none', 4000);
    }
    
    render() {
        return(
            <div className='loading' id='loading-screen'>
                <h1 className='loading-title'>The Gathering</h1>
                <img src={logo} width='50%' alt='End Bible Poverty Now Logo' style={logoStyle}/>
            </div>
        )
    }
}

export default Loading;