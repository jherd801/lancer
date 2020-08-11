import React from 'react';

import ListingCard from '../ListingCard/index';
import API from '../../utils/API'
import { response } from 'express';

function ListingContainer() {
    
    API.getPosts()
    .then((response) => {
        console.log(response)
    });
    
    const listings = response

    return (
        <div>
            <div>
                {listings.map(listing => (
                    <ListingCard
                        key={listing.id}
                        title={listing.title}
                        description={listing.description}
                        price={listing.price}
                        category={listing.category}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListingContainer;