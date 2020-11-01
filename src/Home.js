import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Link to="/question/question">
        <h1 > Travia Questions</h1>
       </Link> 
            </div>
        );
    }
}

export default Home;