import React, { Component } from "react";
import PropTypes from "prop-types";
import BlasterBadge from "../assets/blaster.png";
import NecroBadge from "../assets/necro.png";
import FixerBadge from "../assets/fixer.png";
import KnowerBadge from "../assets/knower.png";

// class fixerInfo extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: "Fixy-fix"
//     }
//   }
// }

// function DisplayNecro() {
//   return (
//       <div>
//           <h1>You got Necro!</h1>
//           <h5>Necro Shit</h5>
//       </div>
//   );
// };

// function DisplaySpec(spec){
//   if (spec === "Necro"){
//     DisplayNecro()
//     console.log("fuck this")
//   } return
// }

// this function actually shows the results in HTML form, calling the propTypes quizResult
function Result(props) {
  console.log(props.quizResult)
  if (props.quizResult === "Necro"){
    return(
     <div className="results-container">
       <div className="results-section">
        <h1>You got {props.quizResult}!</h1>
        <img className="photo" src={NecroBadge} alt="NecroBadge"/>
        <h5>Necro People: Scylla Ramshorn, Izadora</h5>
       </div>
     </div>
    )
  } else if (props.quizResult === "Fixer"){
    return(
      <div className="results-container">
      <div className="results-section">
       <h1>You got {props.quizResult}!</h1>
       <img className="photo" src={FixerBadge} alt="FixerBadge"/>
       <h5>Fixer People: Raelle Collar, Willa Collar</h5>
      </div>
    </div>
    )
  } else if (props.quizResult === "Blaster"){
    return(
      <div className="results-container">
      <div className="results-section">
       <h1>You got {props.quizResult}!</h1>
       <img className="photo" src={BlasterBadge} alt="BlasterBadge"/>
       <h5>Blaster People: Abigail Bellweather, Libba Swythe</h5>
      </div>
    </div>
    )
  } else if (props.quizResult === "Knower"){
    return(
      <div className="results-container">
      <div className="results-section">
       <h1>You got {props.quizResult}!</h1>
       <img className="photo" src={KnowerBadge} alt="KnowerBadge"/>
       <h5>Knower People: Tally Craven</h5>
      </div>
    </div>
    )
  }
};

// quizResults propTypes is a string
Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

// DisplaySpec.propTypes = {
//   quizResult: PropTypes.string.isRequired,
// };

export default Result;