import React from "react";
import "./style.css";

const Jumbotron = () => {
	return (<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">React.js Memory Game</h1>
    <p className="lead">Click on any logo to increase score, but if you hit a dupe - game over!</p>
  </div>
</div>
	);
}

export default Jumbotron; 