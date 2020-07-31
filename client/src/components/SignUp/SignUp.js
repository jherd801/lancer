import React from 'react';

function SignUp() {
    return (
        <div className="container">
            <form>
                <div className="card">
                <h5 className="card-header">Don't have an account?</h5>
                <div className="card-body">
                    <h5 className="card-title">Sign up, it's free!</h5>
                    <p className="card-text">Create an account to view or post freelance jobs.</p>
                    <a href="signUp.html" className="btn btn-primary">Sign up</a>
                </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;