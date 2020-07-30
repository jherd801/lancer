import React, { Component } from "react";
import "./style.css";

class ListingForm extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    serviceCategory: "",
    serviceDescription: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "serviceDescription") {
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
    if (!this.state.title || !this.state.serviceCategory) {
      alert("Fill out your first and last name please!");
    } else if (this.state.serviceDescription.length < 6) {
      alert(
        `Choose a more secure serviceDescription ${this.state.title} ${this.state
          .serviceCategory}`
      );
    } else {
      alert(`Hello ${this.state.title} ${this.state.serviceCategory}`);
    }

    this.setState({
      title: "",
      serviceCategory: "",
      serviceDescription: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.title} {this.state.serviceCategory}
        </p>
        <form className="form">
          <input
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Listing Title"
          />
          <input
            value={this.state.serviceCategory}
            name="serviceCategory"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Service Category"
          />
          <input
            value={this.state.serviceDescription}
            name="serviceDescription"
            onChange={this.handleInputChange}
            type="serviceDescription"
            placeholder="Service Description"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
