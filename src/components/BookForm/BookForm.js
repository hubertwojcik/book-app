import * as React from "react";
import { useDispatch } from "react-redux";
import {
	addFinishedBook,
	addCurrentBook,
} from "../../store/actions/bookActions";
import ToggleSwitch from "../UI/ToggleSwitch/ToggleSwitch";
import { Form, Input, Button, Label, StatusContainer } from "./BookForm.css";

const BookForm = ({ author = "", title = "", isbn = "", pages = 0 }) => {
	const [authorOfBook, setAuthorOfBook] = React.useState(author);
	const [titleOfBook, setTitleOfBook] = React.useState(title);
	const [isbnCode, setIsbnCode] = React.useState(isbn);
	const [numberOfPages, setNumberOfPages] = React.useState(pages);
	const [startDate, setStartDate] = React.useState("");
	const [endDate, setEndDate] = React.useState("");
	const [currReading, setCurrReading] = React.useState(false);
	const [currPage, setCurrPage] = React.useState(0);

	const dispatch = useDispatch();

	const handleAddFinishedBook = (e) => {
		e.preventDefault();
		return dispatch(
			addFinishedBook({
				author: authorOfBook,
				title: titleOfBook,
				isbn: isbnCode,
				numOfPages: numberOfPages,
				start: startDate,
				end: endDate,
			})
		);
	};

	const handleCurrentReadingBook = (e) => {
		e.preventDefault();
		return dispatch(
			addCurrentBook({
				author: authorOfBook,
				title: titleOfBook,
				isbn: isbnCode,
				numOfPages: numberOfPages,
				start: startDate,
				currentPage: currPage,
			})
		);
	};

	return (
		<Form
			onSubmit={currReading ? handleCurrentReadingBook : handleAddFinishedBook}
		>
			<Label htmlFor="author">Author</Label>
			<Input
				type="text"
				onChange={(e) => setAuthorOfBook(e.target.value)}
				value={authorOfBook}
				name="author"
				placeholder="Author"
			/>
			<Label htmlFor="title">Title</Label>

			<Input
				type="text"
				onChange={(e) => setTitleOfBook(e.target.value)}
				value={titleOfBook}
				name="title"
				placeholder="Title"
			/>
			<Label htmlFor="isbn">ISBN code</Label>

			<Input
				type="text"
				onChange={(e) => setIsbnCode(e.target.value)}
				value={isbnCode}
				name="isbn"
				placeholder="ISBN"
			/>
			<Label htmlFor="number">Number of pages</Label>

			<Input
				type="number"
				onChange={(e) => setNumberOfPages(e.target.value)}
				value={numberOfPages}
				name="number"
				placeholder="Number of Pages"
			/>
			<StatusContainer>
				I am currently reading
				<ToggleSwitch
					finished={currReading}
					onChange={(e) => setCurrReading(e.target.checked)}
				/>
			</StatusContainer>
			<Label htmlFor="startDate">Start date</Label>

			<Input
				type="date"
				name="startDate"
				value={startDate}
				onChange={(e) => setStartDate(e.target.value)}
			/>
			{currReading ? (
				<>
					<Label htmlFor="endDate">Current page</Label>
					<Input
						type="number"
						name="currPage"
						value={currPage}
						onChange={(e) => setCurrPage(e.target.value)}
					/>
				</>
			) : (
				<>
					<Label htmlFor="endDate">End date</Label>
					<Input
						type="date"
						name="endDate"
						value={endDate}
						onChange={(e) => setEndDate(e.target.value)}
					/>
				</>
			)}
			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default BookForm;
