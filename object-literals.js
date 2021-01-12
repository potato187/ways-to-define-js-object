const Book = {
  /* properties in key: value pairs */
  title: "The Healing Power of the Breath",
  authors: ["Richard P. Brown", "Patricia L. Gerbarg"],
  price: 15.99,
  description: "Breathing techniques to improves heath and mental well-being",

  /* multi-word property names */
  "publication date": "August 15, 2017",

  /* methods */
  getInfo: function () {
    return `${this.title} - $${
      this.price
    } US dollars - written by ${this.authors.join(", ")}, ${
      this["publication date"]
    }.`;
  },
};

console.log(Book.getInfo());
