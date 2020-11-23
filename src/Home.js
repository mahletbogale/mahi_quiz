import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Link to="/question/question">
        <button className="start"> Start Questions</button>
       </Link> 
            </div>
        );
    }
}

export default Home;