import React from 'react';
import PropTypes from 'prop-types';

// this function displays the question
function Question(props) {
  return (
    <h4 className="question"> {props.content} </h4>
  );
}

// Question component is passed a `content` string.
// `content` is found in the quizQuestions.js in the quizQuestions array
Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;