import React from "react";
import LogoWhite from "../assets/MFSRI_logo_white.png"

const Intro = ({ title, _onStartClick }) => {
  return (
    <main className="content">
      <section className="quiz-container">
        <h1 className="quiz-title">
          Motherland: Fort Salem
          <br /> Specialization Quiz
        </h1>
        <div id="intro-container">
        <div className="container">
          <h3 id="intro-text">
            Find out where you belong in this witch's Army!
          </h3>
          <button id="start-btn" className="btn-lg" onClick={_onStartClick}>
            <span>START QUIZ</span>
          </button>
        </div>
        <article id="logo">
          <a href="https://mfs-research-institute.tumblr.com/" target="_blank">
            <img id="ri-logo" src={LogoWhite} alt="MFSRI Logo" />
          </a>
          <p id="created-by">
            Created by: <br /> MFSRI <br /> Dev. Dep
          </p>
        </article>
        </div>
      </section>
    </main>
  );
};

export default Intro;
