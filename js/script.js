 'use strict';

let numberOfFilms;

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDb();

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  while (numberOfFilms === '' || numberOfFilms === null ||
         isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  }
}

function rememberMyFilms() {
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
}

function detectPersonalLevel() {
  if(personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

function showMyDb() {
  if (!personalMovieDB.private) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {    
  for(let i = 0; i < 3; i++) {
    const filmGenreQuestion = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    if (filmGenreQuestion !== '' && filmGenreQuestion !== null) {
      personalMovieDB.genres[i] = filmGenreQuestion;
    } else {
      i--;
    }
  }
}
