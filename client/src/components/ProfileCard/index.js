import React from 'react';
import './style.css';

function ProfileCard() {
    return (
        <div className="profileCard">
            <div>
                <img className="image-container" src="https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Listing"/>
            </div>
            <div>
                <p>Name: John Doe</p>
            </div>
            <div>
                <p>Location: Anywhere, USA</p>
            </div>
            <div>
                <p>Email: John.Doe@email.com</p>
            </div>
            <button className="mb-3 btn btn-secondary">Add Picture</button>
            <button className="mb-3 btn btn-secondary">Edit Profile</button>
        </div>
    )
}

export default ProfileCard;