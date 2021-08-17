import React from 'react';

const Partner = (props) => {
    return (
        <div className="partner">
            <h3 className="partner-name">{props.partner.name}</h3>
            <p className="partner-reps">{props.partner.representatives}</p>
            <p className="partner-email">{props.partner.email}</p>
            <p className="partner-web"><a href={props.partner.website} target='_blank' rel='noopener noreferrer'>{props.partner.name} Website</a></p>
        </div>
    )
}

export default Partner;