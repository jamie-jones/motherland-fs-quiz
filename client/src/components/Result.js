import React from "react";
import PropTypes from "prop-types";

function Result(props) {
  return (
    <div className="results-container">
      <h2 className="results-section">
        You are a <strong>{props.quizResult}</strong>!
      </h2>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
