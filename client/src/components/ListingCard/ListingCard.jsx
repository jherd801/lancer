import React from 'react';

function ListingCard({ title, description, price, image, name }) {
    return (
        <div>
            <div>
                    <h3>{title}</h3>
                    <h2>{name}</h2>
                    <p><img src={image} alt="Listing"/></p>
                    <p>{description}</p>
                    <p>{price}</p>
            </div>
        </div>
    )
}

export default ListingCard;