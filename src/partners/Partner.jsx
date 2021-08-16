import React from 'react';

class Partner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.partner.name,
            logo: require('../assets/images/' + props.partner.logo + '').default
        }
    }

    render() {
        console.log(this.state.logo);
        return(
            <div className='partner'>
                <div className='partner-logo-container'>
                    <img className='partner-logo' src={this.state.logo} alt={`${this.state.name} logo`} />
                </div>
            </div>
        )
    }

}

export default Partner;