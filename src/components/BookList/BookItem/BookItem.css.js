import styled from "styled-components";

import React from "react";

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 23%;
	min-height: 450px;
	border: 1px solid #ccc;
	border-radius: 10px;
	margin-top: 20px;
	box-shadow: 1px 2px 20px 1px #ccc;
	background-image: ${(props) =>
		props.bgImg ? `url(${props.bgImg})` : `url("../../../images/no_img.jpeg")`};
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const ItemAuthor = styled.div`
	flex-basis: 20%;
	background-color: white;
	border-bottom: 1px solid black;
`;
export const ItemTitle = styled.div`
	flex-basis: 20%;
	background-color: white;
	border-bottom: 1px solid black;
`;
export const ItemIsbn = styled.div`
	flex-basis: 20%;
	border-bottom: 1px solid black;
`;
export const ItemNumOfPages = styled.div`
	flex-basis: 20%;
	background-color: white;
	border-bottom: 1px solid black;
`;
export const ItemStart = styled.div`
	flex-basis: 20%;
	border-bottom: 1px solid black;
`;
export const ItemEnd = styled.div`
	flex-basis: 20%;
	border-bottom: 1px solid black;
`;
export const ItemDays = styled.div`
	flex-basis: 20%;
	border-bottom: 1px solid black;
`;
