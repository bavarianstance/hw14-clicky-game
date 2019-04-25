import React from "react";
import "./style.css";

const Navbar = (props) => {
	return (
		<nav className = "navbar navbar-light bg-light">
		<div>A BayVarian Production</div>
		<div className = {props.navMsgLogic}> {props.navMsg} </div>
		<div>
		Score: {props.score} <span className = "divider"> | </span> Top Score: {props.highScore}
		</div>
	    </nav>	
	);
}

export default Navbar;