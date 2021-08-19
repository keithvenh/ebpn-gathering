import Hubs from './Hubs';

const Region = (props) => {
    const hubs = props.region.bases.map(hub => <Hubs key={hub.id} hub={hub} />)
    return (
        <div className='region'>
            <h3 className='region-title'>{props.region.region}</h3>
            {hubs}
        </div>
    )
}

export default Region;