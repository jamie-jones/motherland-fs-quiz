import React, { Component } from "react";

class Form extends Component {
  state = {
    specialization: "",
  };

  TextFile = () => {
      const element = document.createElement("a");
      const file = new Blob([document.getElementById("message").value], {type: "text/plain"});
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      document.body.appendChild(element)
      element.click()
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted Form");
    this.setState({
      specialization: "",
    });
  };

  render() {
    return (
      <div>
        <form id="form">
          <h6>Help make this quiz better!</h6>
          <input
            value={this.state.specialization}
            name="specialization"
            onChange={this.handleInputChange}
            type="text"
            id="placeholder"
            placeholder="What did you think you were?"
          />
          <button onClick={this.handleFormSubmit} id="submit-form">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
