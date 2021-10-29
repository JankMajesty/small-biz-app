import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import Map from './Map';


const Listing = (props) => {
    const id = props.match.params.id
  
    const listing = props.listings.find(c => c.id == id)

    return (
        <div className="container">
                <h2>{listing.name}</h2>
                <h3>{listing.address}</h3>
                <h3>{listing.hours}</h3>
                <p>{listing.description}</p>  
  
        <Map className="map" lat={listing.lat} lng={listing.lng}/>
     </div>
    )
}

export default Listing