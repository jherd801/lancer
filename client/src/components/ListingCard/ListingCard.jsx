import React from 'react';

function ListingCard({ title, description, price, category }) {
    return (
        <div className="row cardBody">
            <div className="col col-lg-8 projectContent">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{category}</p>
            </div>
        </div>
    )
}

export default ListingCard;