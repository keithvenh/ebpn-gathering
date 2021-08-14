import React from 'react';

class Partner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Partners'
        }
    }

    render() {
        return(
            <h1>{this.state.title}</h1>
        )
    }

}

export default Partner;