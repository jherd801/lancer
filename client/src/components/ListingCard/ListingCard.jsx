import React from 'react';
import './style.css'

function ListingCard({ title, description, price, image, name }) {
    return (
        <div>
            <div className="container">
                    <div className="col col-lg-4">
                        <img src={image} alt="Listing"/>
                    </div>
                    <div className="col col-lg-8">
                        <h2>{title}</h2>
                        <h3>{name}</h3>
                        <p>{price}</p>
                    </div>
                    <p>{description}</p>
            </div>
        </div>
    )
}

export default ListingCard;