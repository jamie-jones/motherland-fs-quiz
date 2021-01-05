import React, { Component } from "react";
import Result from "./components/Result";
import tieBreakerQues from "./api/tieBreakerQues";
import TieBreakerQuiz from "./components/tieBreaker/TieBreaker";

class TieBreakerApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: 1,
      question: "",
      tbAnswerOptions: [],
      answer: "",
      result: "",
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const TBAnswerOptions = tieBreakerQues.map((question) =>
      this.question.answers
    );

    this.setState({
      question: tieBreakerQues[0].question,
      answerOptions: TBAnswerOptions,
    });
}

handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if(this.state.questionIf === tieBreakerQues.length) {
        setTimeout(() => this.setResults(this.getResults()), 300)
    }
}

setUserAnswer(answer) {
    this.setState((state) => ({
        answerCount: {
            ...state.answerCount
        }
    }))
}

  render() {
    return <div></div>;
  }
}

export default TieBreakerApp;
