import React from "react";
import "./style.css";

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