import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { answerList } from "../App"
import React, { Component } from "react";

init("user_CWmtr0BqWI9x70iuHAbAq");

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spec: "",
      list: answerList
    };
  }

  sendMessage(event) {
    event.preventDefault();

    const templateParams = {
      list: answerList,
      spec: this.state.spec,
    };
    console.log(templateParams);
    console.log(this.state.spec);

    emailjs.send("gmail", "template_zecjqzx", templateParams).then(
      function (response) {
        alert("Your message has successfully sent!", {});
        console.log("SUCCESS!", response.status, response.text);
      },
      function (err) {
        console.log(err);
        alert("Your message was not able to be sent");
      }
    );

    this.setState({
      list: answerList,
      spec: "",
    });
  }

  formGone = () => {
    var disappear = document.getElementsById("form");
    var thanks = document.getElementById("thanks");

    if (disappear.style.display === "block") {
      disappear.style.display = "none";
      thanks.style.display = "block";
    }
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <h6 id="form-text">Help make this quiz better!</h6>
          <input
            id="spec fuck"
            name="spec"
            onChange={this.handleInputChange.bind(this)}
            type="text"
            value={this.state.spec}
            maxlength="10"
            placeholder="What did you think you were?"
          />
          <button onClick={this.sendMessage.bind(this)} id="submit-form">
            Submit
          </button>
        </form>
        <h6 id="thanks">Thanks!</h6>
      </div>
    );
  }
}

export default Form;
