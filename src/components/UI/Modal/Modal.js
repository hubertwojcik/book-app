import React from "react";
import { StyledModal } from "./Modal.css";

const Modal = ({ children, visible, toggleModal }) => {
	return (
		<StyledModal isOpen={visible} onBackgroundClick={toggleModal}>
			{children}
		</StyledModal>
	);
};

export default Modal;
