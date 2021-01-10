import PropTypes from "prop-types";
import React from 'react';

function TBQues(props) {
    return (
        <h4 className="question">{props.content}</h4>
    );
};

TBQues.propTypes = {
    content: PropTypes.string.isRequired
}

export default TBQues;