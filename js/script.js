 'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

for(let i = 0; i < 2; i++) {
  let filmNameQuestion = prompt('Один из просмотренных фильмов?'),
      filmRatingQuestion = prompt('На сколько оцените его?');
  
  if (filmNameQuestion !== null && filmRatingQuestion !== null && 
      filmNameQuestion !== '' && filmRatingQuestion !== '' &&
      filmNameQuestion.length < 50) {
        personalMovieDB.movies[filmNameQuestion] = filmRatingQuestion;
        console.log('Good');
  } else {
    console.log('Error');
    i--; // Возврат на одну итерацию назад
  }
} 

if(personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB.movies);