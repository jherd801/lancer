import React, { useState, useEffect } from 'react';

import ListingCard from '../ListingCard/index';
import API from '../../utils/API'

function ListingContainer() {
    
    let [listings, setListings] = useState([]);

    useEffect(() => {
        API.getPosts()
          .then(res => {
            setListings(res.data)
        });      
    }, []);

    return (
        <div>
            {listings.map(listing => (
                <ListingCard
                    key={listing._id}
                    title={listing.title}
                    name={listing.name}
                    description={listing.description}
                    price={listing.price}
                    image={listing.image}
                />
            ))}
        </div>
    )
}

export default ListingContainer;