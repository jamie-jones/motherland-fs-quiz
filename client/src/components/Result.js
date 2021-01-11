import React, { Component } from "react";
import PropTypes from "prop-types";
import BlasterBadge from "../assets/blaster.png";
import NecroBadge from "../assets/necro.png";
import FixerBadge from "../assets/fixer.png";
import KnowerBadge from "../assets/knower.png";
import Share from "./ShareBtn";
import Form from "./Form";

// this function actually shows the results in HTML form, calling the propTypes quizResult
function Result(props) {
  if (props.quizResult === "Necro") {
    return (
      <div>
        <div className="photo-container">
          <h6 id="you-got">You got:</h6>
          <img className="photo" src={NecroBadge} alt="NecroBadge" />
        </div>
        <div id="result-container">
          <main className="container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Share />
            <br />
            <Form />
          </main>
        </div>
      </div>
    );
  } else if (props.quizResult === "Fixer") {
    return (
      <div>
        <div className="photo-container">
          <h6 id="you-got">You got:</h6>
          <img className="photo" src={FixerBadge} alt="FixerBadge" />
        </div>
        <div id="result-container">
        <main className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Share />
          <br />
          <Form />
        </main>
        </div>
      </div>
    );
  } else if (props.quizResult === "Blaster") {
    return (
      <div>
        <div className="photo-container">
          <h6 id="you-got">You got:</h6>
          <img className="photo" src={BlasterBadge} alt="BlasterBadge" />
        </div>
        <div id="result-container">
        <main className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Share />
          <br />
          <Form />
        </main>
        </div>
      </div>
    );
  } else if (props.quizResult === "Knower") {
    return (
      <div>
        <div className="photo-container">
          <h6 id="you-got">You got:</h6>
          <img className="photo" src={KnowerBadge} alt="KnowerBadge" />
        </div>
        <div id="result-container">
        <main className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Share />
          <br />
          <Form />
        </main>
        </div>
      </div>
    );
  }
}

// quizResults propTypes is a string
Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
