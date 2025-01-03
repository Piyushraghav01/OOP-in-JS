function movie(title, year) {
  const movieObj = {
    title: title,
    year: year,
    getDetails() {
      console.log(`
                  Title: ${this.title}
                  Year: ${this.year}
                  `);
    },
  };
  return movieObj;
}

const movie1 = movie('The Avengers', 2012);
console.log(movie1);
movie1.getDetails();

//Constructor Function

function Movie(title, year) {
  this.title = title;
  this.year = year;

  this.getDetails = function () {
    console.log(`
                  Title: ${this.title}
                  Year: ${this.year}
                  `);
  };
}

//new keyword

const movie2 = new Movie('Avatar', 2013);
console.log(movie2);
movie2.getDetails();
