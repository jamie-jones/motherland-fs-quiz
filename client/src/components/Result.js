import React, { Component } from "react";
import quizQuestions from "../api/quizQuestions"
// import fixerInfo from "../api/fixerInfo";
import PropTypes from "prop-types";
// import {DisplayBlaster, DisplayFixer, DisplayKnower, DisplayNecro} from "./Hardcoded";

// class fixerInfo extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: "Fixy-fix"
//     }
//   }
// }

function DisplayNecro() {
  return (
      <div>
          <h1>You got Necro!</h1>
          <h5>Necro Shit</h5>
      </div>
  );
};

function DisplaySpec(spec){
  if (spec === "Necro"){
    DisplayNecro()
    console.log("fuck this")
  } return
}

// this function actually shows the results in HTML form, calling the propTypes quizResult
function Result(props) {
  // console.log(props.quizResult)
  // drawResults(props.quizResult)
  DisplaySpec(props.quizResult)
  console.log(props.quizResult)
  return (
    <div className="results-container">
      <h3 className="results-section">
       {/* {props.quizResult} */}
      </h3>
    </div>
  );
};

// function drawResults(spec){
//   console.log(spec)
//   if (spec === "You got Fixer") {
//     console.log("cool shit")
//     console.log(fixerInfo.state.title)
//   }
//   return(console.log("console.log"))

// };



// quizResults propTypes is a string
Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

DisplaySpec.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
