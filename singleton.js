const Book = new (function () {
  /* new instantiates the object */
  this.title = "Womb Awakening";
  this.price = 15.99;
  this.author = ["Azra Bertrand M.D", "Seren Bertrand"];
  this.description =
    "Womb Awakening gave me total body chills the moment I turned the first page";
  this["publication date"] = " August 15, 2017";

  this.getInfoBook = function () {
    return `${this.title} - $${
      this.price
    } US dollars - written by ${this.author.join(", ")}, ${
      this["publication date"]
    }.`;
  };
})();

console.log(Book.getInfoBook());
