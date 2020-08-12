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
      <div className='container-fluid'>

        <form className="row form">
          <div class="col-6 card-left">
            <div class="card-header">
              Create a new listing.
              </div>
            <div class="card-body">
              <div className="form-group">
                <label for="formGroupExampleInput">Name of Listing</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Job listing name"></input>

                <label for="formGroupExampleInput">Job Information</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Installation cost,  per hour cost"></input>

                <label for="exampleFormControlTextarea1">Job Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button type="button" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>

          <div class="col-6 card-right">
            <div class="card-header">
              Show off your work!
              </div>
            <div class="card-body">
              <h5 class="card-title">Add photo's and videos of your freelanced skills!</h5>
              <p class="card-text">Statistically, job listings with photo's will have a better chance of being hired than jobs without.</p>

              <div class="input-group">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"></input>
                  <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                </div>
              </div>
              <div>
              <button type="button" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
                  
                
      </div>
    );
  }
}

export default ListingForm;





          


