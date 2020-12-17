import React from "react";
import PropTypes from "prop-types";

function Result(props) {
  return (
    <div className="results-container">
      <h3 className="results-section">
        You are a <strong>{props.quizResult}</strong>!
      </h3>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
