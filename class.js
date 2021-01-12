class Book {
  constructor(title, authors, price, description, publicDate) {
    this.title = title;
    this.authors = [...authors];
    this.price = price;
    this.description = description;
    this["publication date"] = publicDate;
  }

  getBookInfo() {
    return `${this.title} - $${
      this.price
    } US dollars - written by ${this.authors.join(", ")}, ${
      this["publication date"]
    }.`;
  }
}

const myBook = new Book(
  "Breath: The New Science of a Lost Art",
  ["James Nestor", "Nestor James"],
  22,
  "A New York Times Bestseller A Washington Post Notable Nonfiction Book of 2020",

  "Hardcover – May 26, 2020"
);

console.log(myBook.getBookInfo());
