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

module.exports = Cinema;
