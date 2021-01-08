import React, { Component } from "react";
import PropTypes from "prop-types";
import BlasterBadge from "../assets/blaster.png";
import NecroBadge from "../assets/necro.png";
import FixerBadge from "../assets/fixer.png";
import KnowerBadge from "../assets/knower.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from "./Form";

// this function actually shows the results in HTML form, calling the propTypes quizResult
function Result(props) {
  const url = window.location.href;
  console.log(props.quizResult);
  if (props.quizResult === "Necro") {
    return (
      <div>
        <div className="photo-container">
          <h6 id="you-got">You got:</h6>
          <img className="photo" src={NecroBadge} alt="NecroBadge" />
        </div>
        <br />
        <main className="container">
          {/* <div className="results-container"> */}
          {/* <div className="results-section"> */}
          {/* <h1 id="youGot">{props.quizResult}!</h1> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CopyToClipboard text={url}>
            <a className="share">
              <i class="fas fa-2x fa-share-alt-square"></i>
            </a>
          </CopyToClipboard>
          <br/>
          <Form />
          {/* </div> */}
          {/* </div> */}
        </main>
      </div>
    );
  } else if (props.quizResult === "Fixer") {
    return (
      <div>
        <div className="photo-container">
          <h6 id="you-got">You got:</h6>
          <img className="photo" src={FixerBadge} alt="FixerBadge" />
        </div>
        <br />
        <main className="container">
          {/* <div className="results-container"> */}
          {/* <div className="results-section"> */}
          {/* <h1 id="youGot">{props.quizResult}!</h1> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CopyToClipboard text={url}>
            <a className="share">
              <i class="fas fa-2x fa-share-alt-square"></i>
            </a>
          </CopyToClipboard>
          <br/>
          <Form />
          {/* </div> */}
          {/* </div> */}
        </main>
      </div>
    );
  } else if (props.quizResult === "Blaster") {
    return (
      <div>
        <div className="photo-container">
          <h6 id="you-got">You got:</h6>
          <img className="photo" src={BlasterBadge} alt="BlasterBadge" />
        </div>
        <br />
        <main className="container">
          {/* <div className="results-container"> */}
          {/* <div className="results-section"> */}
          {/* <h1 id="youGot">{props.quizResult}!</h1> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CopyToClipboard text={url}>
            <a className="share">
              <i class="fas fa-2x fa-share-alt-square"></i>
            </a>
          </CopyToClipboard>
          <br/>
          <Form />
          {/* </div> */}
          {/* </div> */}
        </main>
      </div>
    );
  } else if (props.quizResult === "Knower") {
    return (
      <div>
        <div className="photo-container">
          <h6 id="you-got">You got:</h6>
          <img className="photo" src={KnowerBadge} alt="KnowerBadge" />
        </div>
        <br />
        <main className="container">
          {/* <div className="results-container"> */}
          {/* <div className="results-section"> */}
          {/* <h1 id="youGot">{props.quizResult}!</h1> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CopyToClipboard text={url}>
            <a className="share">
              <i class="fas fa-2x fa-share-alt-square"></i>
            </a>
          </CopyToClipboard>
          <br/>
          <Form />
          {/* </div> */}
          {/* </div> */}
        </main>
      </div>
    );
  }
}

// quizResults propTypes is a string
Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
