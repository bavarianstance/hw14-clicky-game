import React from "react";
import "./style.css";

// below logic init props to assign states on click of specific cards
let MFG = (props) => {
	return (
		<div className = "card" onClick = {event => props.clickEvent(event.target.src)}>
		  <img className = "card-img-top" src = {props.name} alt="" />
		</div>
		);
	}

export default MFG;