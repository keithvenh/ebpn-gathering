import React from 'react';

class Hub extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Hubs'
        }
    }

    render() {
        return(
            <h1>{this.state.title}</h1>
        )
    }

}

export default Hub;