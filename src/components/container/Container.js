import React from "react";
import "./style.css";
import MFG from "../mfg";

const Container = (props) => {
return (
<div className = {
	props.wobble ? "container d-flex flex-wrap justify-content-center wobble" : "container d-flex flex-wrap	justify-content-center"
	}>

	{props.makes.map((x,y) => <MFG name={x} key={y} clickEvent ={props.clickEvent} /> )}
</div>
	);
}

export default Container;