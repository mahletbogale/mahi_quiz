import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div>
              <p>YOU SCORED : {this.props.score}</p>  
            </div>
        );
    }
}

export default Result;