import React from 'react';

import ListingData from '../../utils/listings.json';
import ListingCard from '../ListingCard/index';

function ListingContainer() {
    const listings = ListingData

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