import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from '../components/AnswerOption';

function Quiz(props) {
  // this function returns the answer options component. The properties are defined in App.js
    function renderAnswerOptions(key) {
        return (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
      }

      // here, we are building the quiz itself
    return (
        <main className="container">
            <div className="quiz">
            <QuestionCount
                counter={props.questionId}
                total={props.questionTotal}
            />
            <Question content={props.question} />
            <div className="answerOptions">
              {/* here, we map over the answerOptions and render them with the renderAnswerOptions function above*/}
                {props.answerOptions.map(renderAnswerOptions)}
            </div>
            </div>
        </main>
    );
  }
  
  // these are the propTypes for the Quiz component. All of the strings, numbers, arrays, and functions are pulled from their
  // original destinations, which are imported at the top. All are required.
  Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };
  
  export default Quiz;