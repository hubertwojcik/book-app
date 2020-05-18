import * as React from "react";
import { StyledModal, StyledForm } from "./AddBook.css";
import Modal from "../UI/Modal/Modal";
import ToggleSwitch from "../UI/ToggleSwitch/ToggleSwitch";
import { Input, Label } from "../UI/Input/Input.css";
import BookForm from "../BookForm/BookForm";

const AddBook = ({
	visible,
	toggleModal,
	authorOfBook,
	titleOfBook,
	pages,
	isbn,
}) => {
	const [currReading, setCurrReading] = React.useState(false);
	console.log(currReading);

	return (
		<Modal visible={visible} toggleModal={toggleModal}>
			<BookForm
				author={authorOfBook}
				title={titleOfBook}
				isbn={isbn}
				pages={pages}
			/>
			{/* <StyledForm>
				<Label htmlFor="author">Author</Label>
				<Input
					type="text"
					name="author"
					placeholder="Author"
					value={authorOfBook}
				/>
				<Label htmlFor="title">Title</Label>
				<Input
					type="text"
					name="title"
					placeholder="Title"
					value={titleOfBook}
				/>
				<Label htmlFor="isbn">ISBN code</Label>
				<Input type="text" name="isbn" placeholder="ISBN" value={isbn} />
				<Label htmlFor="number">Number of pages</Label>
				<Input
					type="number"
					name="number"
					placeholder="Number of Pages"
					value={pages}
				/>
				<Label htmlFor="startDate">Start date</Label>
				<Input type="date" name="startDate" />
				<Label htmlFor="endDate">End date</Label>
				<Input type="date" name="endDate" />
				<ToggleSwitch
					finished={currReading}
					onChange={(e) => setCurrReading(e.target.checked)}
				/>
			</StyledForm> */}
		</Modal>
	);
};

export default AddBook;
