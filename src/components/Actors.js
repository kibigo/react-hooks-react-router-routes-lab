import React from "react";
import { actors, movies } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>

      {actors.map((actor, index) => (
        <div key={index}>
          <h3>Name: {actor.name}</h3>
          Movies: 
          <ul>{actor.movies.map((movies, movieindex) => (
            
              <li key={movieindex}>{movies}</li>
            
          ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Actors;
