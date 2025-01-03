function Movie(title) {
  this.title = title;
  //   this.getDetails = function () {
  //     console.log(`Title: ${this.title}`);
  //   };
}

Movie.prototype.getDetails = function () {
  console.log(`Title: ${this.title}`);
};

Movie.prototype.year = 2012;

const movie1 = new Movie('The Avengers');

movie1.year = 2012;
console.log(movie1);
console.log(movie1.__proto__);

const movie2 = new Movie('Avatar');
console.log(movie2);
console.log(movie2.__proto__.__proto__.__proto__);
