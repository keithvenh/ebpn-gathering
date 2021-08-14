const Subsession = (props) => {

    return(

        <div className='subsession'>
            <p>{props.details.topic}</p>
            <a className='zoom-link zoom-link-sm' href={props.details.zoom_url} target='_blank' rel='noreferrer'>Join Breakout</a>
        </div>

    )
}

export default Subsession;