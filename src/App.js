import React, { Component } from "react";
import data from "./data";
import { Route } from "react-router-dom";

import Question from "./Question";
import Result from "./Result";
import Home from "./Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      score: 0,
      index: 0,

      display: "",
      displaytwo: [],
      text: "",

      check: false,
    };
  }

  increamentNext = () => {
    if((this.state.index===this.state.data.length-1)){
      this.setState((prevState) => ({
        index: prevState.index,
      }));

    }else{

    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  }
  };



  decreamentBack = () => {
    if(this.state.index === 0){
      this.setState((prevState) => ({
        index: prevState.index,
      }));

    }else{
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  }
  };



  addScore = () => {

    if((this.state.index===this.state.data.length-1)){
      this.setState((prevState) => ({
        score: prevState.score,
      }));

    }else{
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  }
  };




  handleDisplay = () => {
    this.setState({
      display: "correct answer",
    });
  };

 

  handleDisplayTwo = (event) => {
    this.setState({
      displaytwo: [this.state.data[this.state.index].correct],
    });
  };

  handleText = (event) => {
    this.setState({
      text: "The correct answer:",
    });
  };

  handleCheckDisable = (event) => {
    this.setState({
      check: true,
    });
  };

  handleClear = (event) => {
    this.setState({
      check: false,
    });
  };

  clearBothDisplay = (event) => {
    this.setState({
      display: "",
      text: "",
      displaytwo: "",
    });
  };

  render() {
    return (
      <div className="hello">
        <main>
          <Route
            path="/result/result"
            exact
            render={() => <Result Component={Component} />}
          />

          <Route path="/" exact render={() => <Home Component={Component} />} />
          <Route
            path="/question/question"
            exact
            render={() => (
              <Question
                data={this.state.data}
                addScore={this.addScore}
                score={this.state.score}
                index={this.state.index}
                increamentNext={this.increamentNext}
                decreamentBack={this.decreamentBack}
                handleDisplay={this.handleDisplay}
                display={this.state.display}
                handleDisplayTwo={this.handleDisplayTwo}
                displaytwo={this.state.displaytwo}
                text={this.state.text}
                handleText={this.handleText}
                handleCheckDisable={this.handleCheckDisable}
                check={this.state.check}
                handleClear={this.handleClear}
                clearBothDisplay={this.clearBothDisplay}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
