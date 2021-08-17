import Hub from './Hub';

const Region = (props) => {
    const hubs = props.region.bases.map(hub => <Hub key={hub.ywamBase} hub={hub} />)
    return (
        <div className='region'>
            <h3 className='region-title'>{props.region.region}</h3>
            {hubs}
        </div>
    )
}

export default Region;