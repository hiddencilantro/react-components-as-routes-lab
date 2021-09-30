import React from 'react';
import { movies } from '../data';

const createMoviesList = (movieData) => {
  return movieData.map(movie => {
    return (
      <div>
        <h4>{movie.title} / {movie.time} minutes</h4>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {createMoviesList(movies)}
    </div>
  );
};

export default Movies;
