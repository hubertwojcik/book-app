import React from "react";
import { NavLink } from "react-router-dom";
import { Container, NavigationWrapper, List } from "./Navigation.css";

const Navigation = () => {
	return (
		<Container>
			<NavigationWrapper>
				<List>
					<NavLink to="/">HOME</NavLink>

					<NavLink to="/add">ADD</NavLink>
					<NavLink to="/search">Search</NavLink>
					<NavLink to="/list">LIST</NavLink>
					<NavLink to="/statistics">STATS</NavLink>
					<NavLink to="/signin">SING IN</NavLink>
				</List>
			</NavigationWrapper>
		</Container>
	);
};

export default Navigation;
