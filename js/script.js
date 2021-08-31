 'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const filmNameQuestion = prompt('Один из просмотренных фильмов?'),
      filmRatingQuestion = +prompt('На сколько оцените его?'),
      filmNameQuestion1 = prompt('Один из просмотренных фильмов?'),
      filmRatingQuestion2 = +prompt('На сколько оцените его?');

personalMovieDB.movies[filmNameQuestion] = filmRatingQuestion;
personalMovieDB.movies[filmNameQuestion1] = filmRatingQuestion2;

console.log(personalMovieDB.movies);