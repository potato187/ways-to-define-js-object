/* Constructor function ( Build Object's properties and methods) */
function Book(title, author, description, price, publicationDate) {
  /* properties */
  this.title = title;
  this.authors = [...author];
  this.price = price;
  this.description = description;

  /* multi word property */
  this["publication date"] = publicationDate;

  /* method */
  this.getBookInfo = function () {
    return `${this.title} - $${
      this.price
    } US dollars - written by ${this.authors.join(", ")}, ${
      this["publication date"]
    }.`;
  };
}

/* prototype */
Book.prototype.getInfoByPrototype = function () {
  return `${this.title} - $${
    this.price
  } US dollars - written by ${this.authors.join(", ")}, ${
    this["publication date"]
  }.`;
};

const book = new Book(
  "Breath: The New Science of a Lost Art",
  ["James Nestor", "Nestor James"],

  "A New York Times Bestseller A Washington Post Notable Nonfiction Book of 2020",
  22,
  "Hardcover – May 26, 2020"
);

console.log(book.getBookInfo());
console.log(book.getInfoByPrototype());
