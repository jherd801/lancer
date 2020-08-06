import React from 'react';

function ProfileCard() {
    return (
        <div className="Container">
            <div className='card m-3 '>

                <div>
                    <p>Name: John Does</p>
                </div>
                <div>
                    <p>Location: Anywhere, USA</p>
                </div>
                <div>
                    <p>Email: John.Doe@email.com</p>
                </div>
            </div>
            <button>Add Picture</button>
        </div>
    )
}

export default ProfileCard;