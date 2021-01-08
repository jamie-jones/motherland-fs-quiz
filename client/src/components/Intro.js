import React from 'react';

const Intro = ({title, _onStartClick}) => {
    return (
        <main className="content">
        <section className="quiz">
          <h1 className="quiz-title">
            Motherland: Fort Salem
            <br /> Specialization Quiz
          </h1>
          <div className="container">
            <h3 id="intro-text">
            Find out where you belong in this witch's Army!
          </h3>
          <button id="start-btn" className="btn-lg" onClick={_onStartClick}>
              <span>START QUIZ</span>
          </button>
          </div>
          </section>
        </main>
    );
};

export default Intro;