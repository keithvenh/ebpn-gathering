const Hub = (props) => {
    return(
        <div className="hub">
            <h4 className='hub-name'>{props.hub.ywamBase}</h4>
            <p className='hub-location'>{props.hub.baseLocation}</p>
            <p className='hub-contact'>{props.hub.name}</p>
            <p className='hub-email'>{props.hub.email}</p>
            <p className='hub-question'>Q: What are your focus nations or outreach locations?</p>
            <p className='hub-answer'>A: {props.hub.focusNations}</p>
            <p className='hub-question'>Q: What specific language groups are you currently working with to help end Bible poverty?</p>
            <p className='hub-answer'>A: {props.hub.languageGroups}</p>
            <p className='hub-question'>Q: Are there any languages or regions that you're not currently working in that you have a vision for?</p>
            <p className='hub-answer'>A: {props.hub.visionRegion}</p>
            <p className='hub-question'>Q: What are your End Bible Poverty Now visoin and goals for the next two years in these locations, and what are you needing to accomplish them?</p>
            <p className='hub-answer'>A: {props.hub.twoYearVision}</p>
            <p className='hub-question'>Q: Is there an End Bible Poverty Now project that you have started?</p>
            <p className='hub-answer'>A: {props.hub.ebpnProject === true ? "Yes" : "No"}</p>
            {props.hub.ebpnProject && 
            <div>
                <p className='hub-question'>Q: Describe the project that you have started.</p>
                <p className='hub-answer'>A: {props.hub.startedProject}</p>
                <p className='hub-question'>Q: What language or materials have you used?</p>
                <p className='hub-answer'>A: {props.hub.projectMaterials}</p>
                <p className='hub-question'>Q: What language or materials would you like to use that you haven't been able to?</p>
                <p className='hub-answer'>A: {props.hub.desiredProjectMaterials}</p>
            </div>
            }  
        </div>
    )
}

export default Hub;