import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./components/Navigation/Navigation";
import Goal from "./components/Goal/Goal";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import Statistics from "./components/Statistics/Statistics";
import GlobalStyles from "./index.css";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	min-height: 700px;
	margin-bottom: 10vh;
	margin-left: auto;
	margin-right: auto;
	background-color: white;
	border-radius: 20px;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Navigation />
				<Container>
					<Switch>
						<Route exact path="/">
							<Goal />
						</Route>
						<Route exact path="/add">
							<BookForm />
						</Route>
						<Route path="/list" component={BookList} />
						<Route path="/statistics" component={Statistics}></Route>

						<Route path="/signin">SIGN IN</Route>
					</Switch>
				</Container>
			</Router>
		</>
	);
}

export default App;
