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
        <h6 id="you-got">You got:</h6>
        <main className="container">
          {/* <div className="results-container"> */}
            {/* <div className="results-section"> */}
              {/* <h1 id="youGot">{props.quizResult}!</h1> */}
              <img className="photo" src={NecroBadge} alt="NecroBadge" />
              <br />
              <br />
              <h5>Necro People: Scylla Ramshorn, Izadora</h5>
              <CopyToClipboard text={url}>
                <a>
                  <i class="fas fa-2x fa-share-alt-square share"></i>
                </a>
              </CopyToClipboard>
              <Form />
            {/* </div> */}
          {/* </div> */}
        </main>
      </div>
    );
  } else if (props.quizResult === "Fixer") {
    return (
      <div>
        <h6 id="you-got">You got:</h6>
        <main className="container">
          {/* <div className="results-container"> */}
            {/* <div className="results-section"> */}
              {/* <h1 id="youGot">{props.quizResult}!</h1> */}
              <img className="photo" src={FixerBadge} alt="FixerBadge" />
              <br />
              <br />
              <h5>Fixer People: Raelle Collar, Willa Collar</h5>
              <CopyToClipboard text={url}>
                <a>
                  <i class="fas fa-2x fa-share-alt-square share"></i>
                </a>
              </CopyToClipboard>
              <Form />
            {/* </div> */}
          {/* </div> */}
        </main>
      </div>
    );
  } else if (props.quizResult === "Blaster") {
    return (
      <div>
        <h6 id="you-got">You got:</h6>
        <main className="container">
          {/* <div className="results-container"> */}
          {/* <div className="results-section"> */}
            {/* <h1 id="youGot">{props.quizResult}!</h1> */}
            <img className="photo" src={BlasterBadge} alt="BlasterBadge" />
            <br />
            <br />
            <h5>Blaster People: Abigail Bellweather, Libba Swythe</h5>
            <CopyToClipboard text={url}>
              <a>
                <i class="fas fa-2x fa-share-alt-square share"></i>
              </a>
            </CopyToClipboard>
            <Form />
          {/* </div> */}
          {/* </div> */}
        </main>
      </div>
    );
  } else if (props.quizResult === "Knower") {
    return (
      <div>
        <h6 id="you-got">You got:</h6>
        <main className="container">
          {/* <div className="results-container"> */}
            {/* <div className="results-section"> */}
              {/* <h1 id="youGot">{props.quizResult}!</h1> */}
              <img className="photo" src={KnowerBadge} alt="KnowerBadge" />
              <br />
              <br />
              <h5>Knower People: Tally Craven</h5>
              <CopyToClipboard text={url}>
                <a>
                  <i class="fas fa-2x fa-share-alt-square share"></i>
                </a>
              </CopyToClipboard>
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
