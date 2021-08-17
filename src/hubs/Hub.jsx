const Hub = (props) => {
    return(
        <div className="hub">
            <h4 className='hub-name'>{props.hub.ywamBase}</h4>
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