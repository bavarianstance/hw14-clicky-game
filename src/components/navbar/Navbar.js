import React from "react";
import "./style.css";
// below JSX assigns logic for appropriate state for navbar message depending on user input and calcs scores
const Navbar = (props) => {
	return (
		<nav className = "navbar navbar-dark bg-dark">
		<div>A Bayvarian Production</div>
		<div className = {props.navMsgLogic}> {props.navMsg} </div>
		<div>
		Score: {props.score} <span className = "divider"> | </span> Top Score: {props.highScore}
		</div>
	    </nav>	
	);
}

export default Navbar;