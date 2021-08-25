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

module.exports = Cinema;

