import React from 'react';
import PropTypes from "prop-types";
import TBQues from "./TBQues";
import TBAnswers from "./TBAnswers";

function TieBreaker(props) {
    function renderAnswerOptions(key){
        return (
            <TBAnswers
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
            />
        )
    }
    return (
        <div>
            <TBQues content={props.question} />
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    )
}

TieBreaker.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}

export default TieBreaker;