import React from "react";
import PropTypes from "prop-types";
import TBQues from "./TBQues";
import TBAnswers from "./TBAnswers";

function TieBreaker(props) {
  function renderTBAnswerOptions(key) {
    return (
      <TBAnswers
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        tbQuestionId={props.tbQuestionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  return (
    <div>
      <div className="question-count">
        <p id="countdown">Bonus Question!</p>
      </div>
      <div id="tiebreaker-container">
        <TBQues content={props.tbQuestion} />
        <main className="container">
          <div className="quiz">
            <div className="answerOptions">
              {props.tbAnswerOptions.map(renderTBAnswerOptions)}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

TieBreaker.propTypes = {
  answer: PropTypes.string.isRequired,
  tbAnswerOptions: PropTypes.array.isRequired,
  tbQuestion: PropTypes.string.isRequired,
  tbQuestionId: PropTypes.number.isRequired,
  tbQuestionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

// {props.answerOptions.map(renderTBAnswerOptions)}

export default TieBreaker;
