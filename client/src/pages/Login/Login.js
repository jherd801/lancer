// import React from "react";
// import Login from "../../components/Login"

// const Login = () => (
//   <div className="container">

//   </div>
// );

// export default Login;


import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './style.css'


class Login extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // if (!this.state.firstName || !this.state.lastName) {
    //   alert("Fill out your first and last name please!");
    // } else if (this.state.password.length < 6) {
    //   alert(
    //     `Choose a more secure password ${this.state.firstName} ${this.state
    //       .lastName}`
    //   );
    // } else {
    //   alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    // }

    this.setState({
        email: "",
        password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="jumbotron">
        <p>
          Please enter your email and password to sign in
        </p>
        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <p>
            (Don't have an account? Click the sign up button below to create a free account)
          </p>
          {/* <button className="btn btn-primary m-3" onClick={this.handleFormSubmit}>Submit</button> */}
          <button className='btn btn-primary m-3'>
            <Link to="/dashboard">Submit</Link>
          </button>
          <button className='btn btn-primary m-3'>
            <Link to="/signup">Sign Up</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default Login

