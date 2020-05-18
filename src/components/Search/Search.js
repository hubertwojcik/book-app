import * as React from "react";
import axios from "axios";
import { ModalProvider } from "styled-react-modal";
import Spinner from "../UI/Spinner/Spinner";
import {
	Container,
	Title,
	ListContainer,
	ListItem,
} from "../BookList/BookList.css";
import {
	ItemContainer,
	ItemAuthor,
	ItemTitle,
	ItemNumOfPages,
} from "../BookList/BookItem/BookItem.css";
import BookCard from "../BookCard.js/BookCard";

const Search = () => {
	const [query, setQuery] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [responseData, setResponseData] = React.useState([]);
	const [showBookDetails, setShowBookDetails] = React.useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		axios
			.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
			.then((response) => {
				setLoading(false);
				setResponseData(response.data.items);
			})
			.catch((err) => {
				console.log(`ssadasd`);
			});
	};

	const bookOpenDetailsHandler = () => {
		setShowBookDetails(true);
	};

	const bookCloseDetailsHandler = () => {
		setShowBookDetails(false);
	};
	console.log(responseData);

	let searchList = responseData.map((item) => (
		<BookCard
			backgroundImg={
				item.volumeInfo.imageLinks
					? item.volumeInfo.imageLinks.thumbnail
					: "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6"
			}
			author={item.volumeInfo.authors}
			title={item.volumeInfo.title}
			description={item.volumeInfo.description}
			publisher={item.volumeInfo.publisher}
			// isbn={item.volumeInfo.industryIdentifiers[0].identifier}
			pageNumber={item.volumeInfo.pageCount}
		/>
	));
	if (loading) {
		searchList = <Spinner />;
	}
	return (
		<div>
			<ModalProvider>
				<Title>
					<form action="">
						<input
							type="search"
							name="search"
							id="search"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<button onClick={handleSubmit}>Search</button>
					</form>
				</Title>
				<ListContainer>
					{searchList}
					{/* {responseData.map((item) => (
						<BookCard
							backgroundImg={
								item.volumeInfo.imageLinks
									? item.volumeInfo.imageLinks.thumbnail
									: "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg?ver=6"
							}
							author={item.volumeInfo.authors}
							title={item.volumeInfo.title}
							description={item.volumeInfo.description}
							publisher={item.volumeInfo.publisher}
							// isbn={item.volumeInfo.industryIdentifiers[0].identifier}
							pageNumber={item.volumeInfo.pageCount}
						/>
					))} */}
				</ListContainer>
			</ModalProvider>
		</div>
	);
};

export default Search;
