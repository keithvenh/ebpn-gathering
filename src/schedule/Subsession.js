const Subsession = (props) => {

    return(

            <div>
                <div className='session-info'>
                    <p className='topic'>{props.details.topic}</p>
                </div>
                <a className='zoom-link zoom-link-sm' href={props.details.zoom_url} target='_blank' rel='noreferrer'>Join Breakout</a>
            </div>

    )
}

export default Subsession;