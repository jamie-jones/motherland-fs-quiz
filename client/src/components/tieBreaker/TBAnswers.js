import React from "react";
import PropTypes from "prop-types";

function TBAnswers(props) {
  
  function renderTBAnswers(key) {
    return (
      <TBAnswers
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div className="answers-section">
      <input
        type="radio"
        className="btn-check radioCustomButton"
        name="radioGroup"
        // this property is a comparison statement.
        // It will be a boolean based on whether the answer selected is equal to the answer option type
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="btn btn-secondary radioCustomLabel answers-btn" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </div>
  );
}

TBAnswers.propTypes = {
  answerType: PropTypes.array.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default TBAnswers;
