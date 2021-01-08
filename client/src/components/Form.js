import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
            <h6>Help make this quiz better!</h6>
            <input type="text" id="form" placeholder="What did you think you were?"/>
            <button type="submit" id="submit-form">Submit</button>
          </form>
        </div>
    );
};

export default Form;