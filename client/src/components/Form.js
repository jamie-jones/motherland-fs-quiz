import React, { Component } from "react";
import "../App";

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
    var disappear = document.getElementsById("form");
    var thanks = document.getElementById("thanks");

    if (disappear.style.display === "block") {
      disappear.style.display = "none";
      thanks.style.display = "block";
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
    console.log("button click");

    // this.TextFile();

    // this.formGone();

    this.setState({
      specialization: "",
    });
  };

  render() {
    return (
      <div>
        <form
          id="form"
          className="gform"
          method="POST"
          // data-email="mfs.specquiz@gmail.com"
          action="https://script.google.com/macros/s/AKfycbw9-aOIHxBMV6Mn4qkJ4cMkES6Gr806D4DlsYhdDnQy7_r4FuUJ/exec"
        >
          <h6>Help make this quiz better!</h6>
          <input
            // value={this.state.specialization}
            id="fuck"
            name="fuck"
            onChange={this.handleInputChange}
            type="text"
            placeholder="What did you think you were?"
          />
          {/* <input id="answers" name="answers" value={this.filteredOptions} /> */}
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
