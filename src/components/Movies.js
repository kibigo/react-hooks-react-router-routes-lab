import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      
        {movies.map((movie, index) => (
          <div key={index}>
            <h2>Name: {movie.title} </h2>
            <p>Time: {movie.time}</p>

            
            Genres:<ul>
              {movie.genres.map((genre, genreindex) => (
                <li key={genreindex}>{genre}</li>
              ))}
            </ul>
          </div>

          
        ))}
      
    </div>
  )
}

export default Movies;
