import store from '../redux/store';
import hubClick from '../redux/actions/hubClick';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        handleHubClick: (hub) => {
            console.log("In Hubs.mapDispatchTopProps.handleNavClick");
            store.dispatch(hubClick(hub))
        }
    }
};

const Hubs = (props) => {

    console.log(props);
    return(
        <div className="hub">
            <h4 className='hub-name'>{props.hub.ywamBase}</h4>
            <p className='hub-location'>{props.hub.baseLocation}</p>
            <p className='hub-contact'>{props.hub.name}</p>
            <p className='hub-email'>{props.hub.email}</p>
            <p className='hub-more'><a href='#' onClick={() => {props.handleHubClick(props.hub)}}>Learn More</a></p>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Hubs);