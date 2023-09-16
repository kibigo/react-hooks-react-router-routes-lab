import React from "react";
import { directors, movies } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>

      {directors.map((director, index) => (
        <div key={index}>
          <h3>Name: {director.name}</h3>
          Movies: 
          <ul>{director.movies.map((movies, moviesindex) => (
           
              <li key={moviesindex}>{movies}</li>
           
          ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Directors;
