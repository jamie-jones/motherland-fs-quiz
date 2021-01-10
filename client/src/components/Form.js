import React, { Component } from "react";

class Form extends Component {
  state = {
    specialization: "",
  };

  TextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").value], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  formGone = () => {
    var disappear = document.getElementById("form");
    var thanks = document.getElementById("thanks");

    if (disappear.style.display === "block") {
      disappear.style.display = "none";
      thanks.style.display = "block";
    } else {
      disappear.style.display = "block";
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    // this.TextFile();

    this.formGone();

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
            id="input"
            placeholder="What did you think you were?"
          />
          <button onClick={this.handleFormSubmit} id="submit-form">
            Submit
          </button>
        </form>
        <h6 id="thanks">Thanks!</h6>
      </div>
    );
  }
}

export default Form;
