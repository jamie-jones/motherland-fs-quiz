import React from 'react';
import PropTypes from "prop-types";
import TBQues from "./TBQues";
import TBAnswers from "./TBAnswers";

function TieBreaker(props) {
    function renderTBAnswerOptions(key){
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
            <TBQues content={props.tbQuestion} />
            <div className="answerOptions">
                {props.tbAnswerOptions.map(renderTBAnswerOptions)}
            </div>
        </div>
    )
}

TieBreaker.propTypes = {
    answer: PropTypes.string.isRequired,
    tbAnswerOptions: PropTypes.array.isRequired,
    tbQuestion: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}

// {props.answerOptions.map(renderTBAnswerOptions)}

export default TieBreaker;