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
  };

  handleBack = (event) => {
    this.props.decreamentBack();
  };

  handleChangeTwo = (event) => {
    this.props.handleDisplayTwo();
    this.props.handleText();
  };

  handleCheck = (event) => {
    this.props.handleCheckDisable();
  };

  handleResult = () => {
    //     let nIndex = this.props.index;
    //    if((nIndex)===(this.props.data.length-1)){
    //    }
  };

  clearRadio = (event) => {
    this.props.handleClear();
  };

  clearDisplay = (event) => {
    this.props.clearBothDisplay();
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
                defaultChecked={this.props.check}
                disableRadio={this.props.disable}
                onClick={() => {
                  this.handleChangeTwo();

                  this.handleCheck();
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
            defaultChecked={this.props.check}
            disableRadio={this.props.disable}
            onClick={() => {
              this.handleChange();

              this.handleCheck();
            }}
          />
          {this.props.data[nIndex].correct}
        </label>
        <br />
        <br />

        <Link
          className="back"
          onClick={() => {
            this.handleBack();
          }}
        >
          <button>back</button>
        </Link>
        <Link>
          <button
            className="next"
            onClick={() => {
              this.handleNext();
              this.handleResult();
              this.clearRadio();
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
