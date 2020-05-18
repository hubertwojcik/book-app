import * as React from "react";
import { Container, Slider, SliderInput } from "./ToggleSwtich.css";

const ToggleSwtich = ({ finished, onChange }) => {
	return (
		<Container>
			<SliderInput type="checkbox" checked={finished} onChange={onChange} />
			<Slider />
		</Container>
	);
};

export default ToggleSwtich;
