import React from 'react';
import { directors } from '../data';

const createDirectorsList = (directorData) => {
  return directorData.map(director => {
    return (
      <div>
        <h4>{director.name}</h4>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {createDirectorsList(directors)}
    </div>
  );
}

export default Directors
