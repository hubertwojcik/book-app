import * as React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/actions/bookActions";
import { Form, Input, Button, Label } from "./BookForm.css";

const BookForm = () => {
	const [authorOfBook, setAuthorOfBook] = React.useState("");
	const [titleOfBook, setTitleOfBook] = React.useState("");
	const [isbnCode, setIsbnCode] = React.useState("");
	const [numberOfPages, setNumberOfPages] = React.useState(0);
	const [startDate, setStartDate] = React.useState("");
	const [endDate, setEndDate] = React.useState("");

	const dispatch = useDispatch();

	const handleAddBook = (e) => {
		e.preventDefault();
		return dispatch(
			addBook({
				author: authorOfBook,
				title: titleOfBook,
				isbn: isbnCode,
				numOfPages: numberOfPages,
				start: startDate,
				end: endDate,
			})
		);
	};

	return (
		<Form onSubmit={handleAddBook}>
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
			<Label htmlFor="startDate">Start date</Label>

			<Input
				type="date"
				name="startDate"
				value={startDate}
				onChange={(e) => setStartDate(e.target.value)}
			/>
			<Label htmlFor="endDate">End date</Label>

			<Input
				type="date"
				name="endDate"
				value={endDate}
				onChange={(e) => setEndDate(e.target.value)}
			/>
			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default BookForm;
