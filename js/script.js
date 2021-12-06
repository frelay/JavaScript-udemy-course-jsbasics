"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    while (
      personalMovieDB.count === "" ||
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let filmNameQuestion = prompt("Один из просмотренных фильмов?"),
        filmRatingQuestion = prompt("На сколько оцените его?");

      if (
        filmNameQuestion !== null &&
        filmRatingQuestion !== null &&
        filmNameQuestion !== "" &&
        filmRatingQuestion !== "" &&
        filmNameQuestion.length < 50
      ) {
        personalMovieDB.movies[filmNameQuestion] = filmRatingQuestion;
        console.log("Good");
      } else {
        console.log("Error");
        i--; // Возврат на одну итерацию назад
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDb: function () {
    if (!personalMovieDB.private) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (!personalMovieDB.private) {
      personalMovieDB.private = true;
    } else {
      personalMovieDB.private = false;
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      const filmGenreQuestion = prompt(`Ваш любимый жанр под номером ${i + 1}`);
      if (filmGenreQuestion !== "" && filmGenreQuestion !== null) {
        personalMovieDB.genres[i] = filmGenreQuestion;
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach(function (item, i) {
      console.log(`Любимый жанр №${i + 1} - это ${item}`);
    });
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDb();
