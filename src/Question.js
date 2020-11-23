import React, { Component } from "react";
import { Link } from "react-router-dom";

class Question extends Component {
  handleChange = (event) => {
    if (this.props.data[this.props.index].correct) {
      this.props.addScore();
      this.props.handleDisplay();
    }
  };
  handleNext = (event) => {
    this.props.increamentNext();
    // this.props.handleCheckTwo();
  };

  handleBack = (event) => {
    this.props.decreamentBack();
  };

  handleChangeTwo = (event) => {
    this.props.handleDisplayTwo();
    this.props.handleText();
  };

  handleCheckChange = (event) => {
    this.props.handleCheck();
  };

  clearcheck = (event) => {
    this.props.handleCheckTwo();
  };

  clearDisplay = (event) => {
    this.props.clearBothDisplay();
  };

  handleDisable = (event) => {
    this.props.handleRadioDisable();
  };

  render() {
    let nIndex = this.props.index;

    return (
      <div className="qesA">
        <p>{this.props.data[nIndex].question}</p>
        <br />
        {this.props.data[nIndex].incorrect.map((incorrect, index) => {
          return (
            <div>
              <input
                className="incorrect"
                key={index}
                name="answer"
                type="radio"
                value={incorrect}
                checked={this.props.check}
                disabled={this.props.disable}
                onClick={(event) => {
                  this.handleChangeTwo();
                  this.handleDisable();
                  this.handleCheckChange();
                }}
              />

              <label>{incorrect}</label>
            </div>
          );
        })}

        <label>
          <input
            className="correct"
            type="radio"
            name="answer"
            value={this.props.data[nIndex].correct}
            checked={this.props.check}
            disabled={this.props.disable}
            onClick={(event) => {
              this.handleChange();
              this.handleDisable();
              this.handleCheckChange();
            }}
          />
          {this.props.data[nIndex].correct}
        </label>
        <br />
        <br />

        <Link>
          <button
            className="back"
            onClick={(event) => {
              this.handleDisable();
              this.handleBack();
            }}
          >
            {" "}
            back
          </button>
        </Link>

        <Link>
          <button
            className="next"
            onClick={(event) => {
              this.handleNext();
              this.clearcheck();
              this.clearDisplay();
            }}
          >
            {" "}
            next
          </button>
        </Link>
        <p className="incresult"></p>
        <p>score:{this.props.score}</p>

        <p className="play">{this.props.display}</p>
        <p className="playtwo">
          {this.props.text}
          {this.props.displaytwo}
        </p>
      </div>
    );
  }
}

export default Question;
