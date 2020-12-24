import React from 'react';
import PropTypes from 'prop-types';

// this function shows the question count and total of questions
function QuestionCount(props) {
  return (
    <div className="question-count">
      <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}

// two props are created here: counter and total
QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;