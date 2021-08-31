 'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: '',
  actors: '',
  genres: [],
  private: false
};

const movies = {};

const filmNameQuestion = prompt('Один из просмотренных фильмов?');
const filmRatingQuestion = +prompt('На сколько оцените его?');

movies[filmNameQuestion] = filmRatingQuestion;

console.log(movies);