const logo = require('../assets/images/logo.svg').default;

const Footer = (props) => {

    return (
        <div className='footer'>
            <p className='disclaimer'>* Some country names have been removed for security.</p>
            <img src={logo} alt="End Bible Poverty Now Logo" />
            <p className='copyright'>Copyright 2021 End Bible Poverty Now</p>
            <p className='thanks'>Special thanks to Caitlyn and Daniel</p>
        </div>
    )
}

export default Footer;