import React from "react";
import { LoadingIndicator } from "./Spinner.css";

const Spinner = () => {
	return (
		<LoadingIndicator>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</LoadingIndicator>
	);
};

export default Spinner;
