import React from 'react';

import ListingData from '../../../../scripts/seedPosts';
import ListingCard from '../ListingCard/index';

function ListingContainer() {
    const listings = ListingData

    return (
        <div>
            <h2>A few examples of past projects</h2>
            <div>
                {projects.map(project => (
                    <ListingCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        price={project.price}
                        category={project.category}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListingContainer;