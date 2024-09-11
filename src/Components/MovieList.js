import React from 'react';
import MovieCard from './MovieCard'

const MovieList = ({ movies}) => {

  return (
    <div className="row gx-4">

      {movies.map((movie,i) => (
        <div key={i} className="col-md-3 col-sm-12 my-3 ">
          <MovieCard {...movie} />
              </div>
              
      ))}
    </div>
  );
};

export default MovieList;

