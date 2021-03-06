const Resources = (props) => {

    return (
        <div className='resources'>

            <div className ='resource'>
                <h2 className='resource-title'>March 7 Vision</h2>
                <p className='resource-author'>Loren Cunningham</p>
                <div className='resource-container'>
                    <iframe className='resource-item' width="516" height="315" src="https://www.youtube-nocookie.com/embed/Gxi_mLCEDiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className ='resource'>
                <h2 className='resource-title'>Reflections on Partnering</h2>
                <p className='resource-author'>David Joel Hamilton</p>
                <a className='resource-button' href='/reflections-on-partnering.pdf' download="Reflections On Partnering">Download the PDF!</a>
            </div>

            <div className ='resource'>
                <h2 className='resource-title'>The Pacific Wa'a Covenant</h2>
                <a className='resource-button' href='/the-pacific-waa-covenant.pdf' download="The Pacific Wa'a Covenant">Download the PDF!</a>
            </div>

        </div>
    );
}

export default Resources;