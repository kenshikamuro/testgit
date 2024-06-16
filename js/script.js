"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres:[],
    privat: false
};

const firstFilm = prompt('Один из последних просмотренных фильмов?','');
const firstFilmReview = prompt('На сколько оцените его?','');

const secondFilm = prompt('Один из последних просмотренных фильмов?','');
const secondFilmReview = prompt('На сколько оцените его?','');

personalMovieDB.movies[firstFilm] = firstFilmReview;
personalMovieDB.movies[secondFilm] = secondFilmReview;