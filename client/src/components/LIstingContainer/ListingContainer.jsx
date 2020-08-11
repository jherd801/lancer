import React, { useState, useEffect } from 'react';

import ListingCard from '../ListingCard/index';
import API from '../../utils/API'

function ListingContainer() {
    
    let [listings, setListings] = useState([]);

    useEffect(() => {
        API.getPosts()
          .then(res => {
            console.log(res.data)
            setListings(res.data)
        });      
    }, []);

    return (
        <div>
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
        </div>
    )
}

export default ListingContainer;