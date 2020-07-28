import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import Reviews from "../../components/Reviews/Reviews"

const Login = () => (
  <div className="container">
    <SignUp />
    <aside>
      <Reviews />
    </aside>
  </div>
);

export default Login;