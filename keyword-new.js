const Book = new Object();
/* Book's properties */
Book.Title = "The Healing Power Of Breath";
Book.Price = 15.99;
Book.Author = "Richard P. Brown";
Book["publication date"] = "June 12, 2012";
/* Book's methods */

Book.getInfo = function () {
  return `Title: ${this.Title}.\nAuthor: ${this.Author}.\nPrice: $${this.Price}.\nPublication date: ${this["publication date"]}`;
};

console.log(Book.getInfo());
