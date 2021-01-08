import React from "react";
import PropTypes from "prop-types";

// this function shows the question count and total of questions
function QuestionCount(props) {
  return (
    <div className="question-count">
      {/* <div className="progress" id="progress">
        <div
          className="progress-bar"
          id="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        > */}
          <p id="countdown"><span>{props.counter}</span> of <span>{props.total}</span></p>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}

// two props are created here: counter and total
QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
