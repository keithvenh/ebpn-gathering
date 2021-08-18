const Hub = (props) => {
    return(
        <div className="hub">
            <p>{props}</p>
            <h4 className='hub-name'>{props.hub.ywamBase}</h4>
            <p className='hub-location'>{props.hub.baseLocation}</p>
            <p className='hub-contact'>{props.hub.name}</p>
            <p className='hub-email'>{props.hub.email}</p>
            <p className='hub-more'><a href='#' onClick={}>Learn More</a></p>
        </div>
    )
}

// class Hub extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: 'Hubs'
//         }
//     }

//     render() {
//         return(
//             <h1>{this.state.title}</h1>
//         )
//     }

// }

export default Hub;