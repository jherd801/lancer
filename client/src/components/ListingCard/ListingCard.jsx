import React from 'react';
import './style.css'

function ListingCard({ title, description, price, image, name }) {
    return (
        <div>
            <div className="row mt-5 cardBody">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <img className="image-container" src={image} alt="Listing"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                        <h2>Skill: {title}</h2>
                        <h3>Freelancer: {name}</h3>
                        <p>Rate: {price}</p>
                        <p>Description: {description}</p>
                        <button type="button" className="btn btn-secondary btn-sm">
                        View Listing Details
                    </button>
                    </div>
            </div>
        </div>
    )
}

export default ListingCard;