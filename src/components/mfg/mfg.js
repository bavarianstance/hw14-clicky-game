import React from "react";
import "./style.css";

let mfg = (props) => {
	return (
		<div className = "card" onClick = {event => props.clickEvent(event.target.src)}>
		  <img className = "card-img-top" src = {props.name} />
		</div>
		);
	}

export default MFG;