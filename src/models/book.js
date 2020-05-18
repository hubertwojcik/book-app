import moment from "moment";

export class FinishedBook {
	constructor(author, title, isbn, numOfPages, startDate, endDate) {
		this.author = author;
		this.title = title;
		this.isbn = isbn;
		this.numOfPages = numOfPages;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	numberOfDays() {
		let start = moment(this.startDate);
		let end = moment(this.endDate);
		return end.diff(start, "days");
	}
}

export class CurrentBook {
	constructor(author, title, isbn, numOfPages, startDate, currPage) {
		this.author = author;
		this.title = title;
		this.isbn = isbn;
		this.numOfPages = numOfPages;
		this.startDate = startDate;
		this.currPage = currPage;
	}
	numberOfDays() {
		let start = moment(this.startDate);
		let end = moment(this.endDate);
		return end.diff(start, "days");
	}
}
