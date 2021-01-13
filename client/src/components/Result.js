import React, { Component } from "react";
import PropTypes from "prop-types";
import BlasterBadge from "../assets/blaster.png";
import NecroBadge from "../assets/necro.png";
import FixerBadge from "../assets/fixer.png";
import KnowerBadge from "../assets/knower.png";
import Share from "./ShareBtn";

// this function actually shows the results in HTML form, calling the propTypes quizResult
function Result(props) {
  if (props.quizResult === "Necro") {
    return (
      <div>
        <div className="photo-container">
          <h6>You got:</h6>
          <img className="photo" src={NecroBadge} alt="NecroBadge" />
        </div>
        <div id="result-container">
          <main className="r-container">
            <p className="descrip">
              You got Necro! Necros are a curious bunch of witches. Both because
              they are curious about the world and because they can just be an
              weird. <i>Sexy-weird</i>, that is. They embrace their weirdness
              and are always looking for a deeper meaning behind the little
              things in life. They value intellect and curiosity but are highly
              ambitious and will work hard to achieve their goals, perhaps
              through somewhat unconventional means at times. But don't get on
              their bad side. Much like the mushrooms they work with, they can
              be cute, but <i>deadly</i>. While they may be shy at first, once
              you get to know them, they’re worth the effort.
            </p>
            <Share />
            <br />
          </main>
        </div>
      </div>
    );
  } else if (props.quizResult === "Fixer") {
    return (
      <div>
        <div className="photo-container">
          <h6>You got:</h6>
          <img className="photo" src={FixerBadge} alt="FixerBadge" />
        </div>
        <div id="result-container">
          <main className="r-container">
            <p className="descrip">
              You got Fixer! If you need someone to hold things together, both
              literally and figuratively, these witches are your go-to. A Fixer
              will put others before themselves and are always willing to help
              support their friends, their neighbors, even that stranger from
              the other day, simply because it’s right. Fixers are also creative
              problem solvers, often thinking outside of the box for ways to
              work through any obstacle thrown at them. Even if the path is
              hard, Fixers will work with their sisters to get through it and
              never leave a fellow witch behind. If you are looking for loyalty,
              you will have it in a Fixer.
            </p>
            <Share />
            <br />
          </main>
        </div>
      </div>
    );
  } else if (props.quizResult === "Blaster") {
    return (
      <div>
        <div className="photo-container">
          <h6>You got:</h6>
          <img className="photo" src={BlasterBadge} alt="BlasterBadge" />
        </div>
        <div id="result-container">
          <main className="r-container">
            <p className="descrip">
              You got Blaster! Always the adventurous group, these witches mean
              business and are ready to hit the ground running for whatever life
              brings them next. They may seem serious at times, but at heart
              they can be the life of the party and will always accept a hug
              from their closest friends. Blasters are brave and daring, always
              willing to try new things even if it is outside of their comfort
              zone. They are great motivators and often migrate towards
              leadership roles within any particular group; team captain through
              and through. They are that friend who will do anything for you,
              even if it means getting in trouble.
            </p>
            <Share />
            <br />
          </main>
        </div>
      </div>
    );
  } else if (props.quizResult === "Knower") {
    return (
      <div>
        <div className="photo-container">
          <h6>You got:</h6>
          <img className="photo" src={KnowerBadge} alt="KnowerBadge" />
        </div>
        <div id="result-container">
          <main className="r-container">
            <p className="descrip">
              You got Knower! These witches are an empathetic bunch; they have a
              way of reading people and understanding when something as simple
              as a hug or a listening ear is necessary. They are thoughtful and
              caring, and always supportive of their friends. But they are also
              that friend who is funny and joyful at all the right times, when
              your friends need a laugh the most. So by nature, they can be a
              bit of a goofball. However, while they may seem aloof and silly at
              times, they take their work very seriously and easily master their
              professions. Knowers are that friend you turn to for advice and a
              supporting shoulder.
            </p>
            <Share />
            <br />
          </main>
        </div>
      </div>
    );
  }
}

// quizResults propTypes is a string
Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
