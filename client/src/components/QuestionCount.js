import React from "react";
import PropTypes from "prop-types";

// this function shows the question count and total of questions
function QuestionCount(props) {
  return (
    <div className="question-count">
          <div id="countdown">
            <p><span>{props.counter}</span> of <span>{props.total}</span>
          <div className="progress" id="progress">
        <div
          className="progress-bar"
          id="progress-bar"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        </div></p>
      </div>
    </div>
  );
}

// two props are created here: counter and total
QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
