const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function() {
  const result = this.films.map((film) => {
    return film.title;
  })
  return result;
};

Cinema.prototype.findByTitle = function(title) {
  const result = this.films.filter((film) => {
    return film.title === title;
  });
  return result;
};

Cinema.prototype.getFilmsByGenre = function(genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.checkYearHasFilm = function(year) {
  const result = this.films.some((film) => {
    return film.year === year;
  });
  return result;
};

Cinema.prototype.checkFilmLongerThan = function(time) {
  const result = this.films.some((film) => {
    return film.length >= time;
  });
  return result;
};

// Cinema.prototype.getRunningTime = function() {
//   const result = this.films.map((film) => {
//     return film.length;
//   });
//   return result;
// };

Cinema.prototype.totalRunningTime = function() {
  const total = this.films.reduce((runningTotal, film) => {
    return film.length + runningTotal;
  }, 0);
  return total;
};

// Cinema.prototype.totalRunningTime = function() {
//   const runningTimes = this.getRunningTime();
//   const total = runningTimes.reduce((runningTotal, currentValue) => {
//     return runningTotal + currentValue;
//   }, 0);
//   return total;
// };

Cinema.prototype.filmsByYear = function(year) {
  const result = this.films.filter((film) => {
    return film.year === year;
  });
  return result;
};

Cinema.prototype.filmsByProperty = function(property, value) {
  const result = this.films.filter((film) => {
    return film[property] === value;
  });
  return result;
};

module.exports = Cinema;

