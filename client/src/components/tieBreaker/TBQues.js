import PropTypes from "prop-types";
import React from 'react';

function TBQues(props) {
    return (
        <h2 className="question">{props.content}</h2>
    );
};

TBQues.propTypes = {
    content: PropTypes.string.isRequired
}

export default TBQues;