import Result from "./components/Result";
import quizQuestions from "./api/quizQuestions";
import Quiz from "./components/Quiz";
import React, { Component } from "react";
import "./index.css";
import "./App.css";
import RILogo from "./assets/MFSRI-logo.png";

class App extends Component {
  constructor(props) {
    super(props);

    // this contains data that a component's event handlers may change to trigger a UI update
    // all of these components change, is what this is saying.
    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // componentDidMount gets invoked after the element has been mounted (first render)
  componentDidMount() {
    // this variable maps the quizQuestions and makes the answers shuffle around
    const shuffledAnswerOptions = quizQuestions.map((question) =>
      this.shuffleArray(question.answers)
    );

    // this setState will see the updated state and it will be executed only once despite the state change
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  // this function actually shuffle the array
  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // this function does two things...
  handleAnswerSelected(event) {
    // sets the answer...
    this.setUserAnswer(event.currentTarget.value);
    // and if the questionId is less than the question length...
    if (this.state.questionId < quizQuestions.length) {
      // we then set the next question (300 means 300ms delay between transitions)
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      // else, we are taken to the results
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  // this function sets the answer based on the user's selection the answer value is the value of the selected answer (aka Necro, Fixer, Blaster, Knower)
  setUserAnswer(answer) {
    // we call setState function so we can access the previous state, which will be passed into the function as the first parameter
    this.setState((state) => ({
      // here, a new object is created
      answersCount: {
        // spread syntax is used to call all of the state (this) and merged with the new answerCount value
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }

  // function for setting next question
  setNextQuestion() {
    // variables for incrementing the counter and questionId
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    // assigning new variables through setState
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
    });
  }

  // function for calculating whish answer type has the highest number
  getResults() {
    const answersCount = this.state.answersCount;
    // Object.key returns an array of strings that represent all of the answer types (Necro, Fixer, etc.)
    const answersCountKeys = Object.keys(answersCount);
    // we map over the answerCountKeys to return an array of the values
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    // we get the highest number of the array with the Math.max.apply
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    // here, we use .filter to filter in the maxAnswerCount, giving us only the maxed out answer type
    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  }

  setResults(result) {
    // if the result for maxAnswerCount is only one answer type...
    if (result.length === 1) {
      // the result will be set
      this.setState({ result: result[0] });
      // but if the result is more than one answer type...
    } else {
      // we are given an "undetermined" result
      this.setState({ result: result[0] });
    }
  }

  // This function renders the quiz and its elements
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  // here, we render the first things being displayed (the welcome and the beginning on the quiz)
  render() {
    return (
      <main className="content">
        <section className="quiz">
          <h1 className="quiz-title">
            Motherland: Fort Salem
            <br /> Specialization Quiz
          </h1>
          <br />
          <h5 id="intro-text">
            Find out where you belong in this witch's Army!
          </h5>
          <br />
          <article id="logo">
          <img id="ri-logo" src={RILogo} alt="MFSRI Logo" />
          <p id="created-by">
            Created by: <br /> MFSRI <br /> IT Dep
          </p>
        </article>
        </section>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </main>
    );
  }
}

export default App;
