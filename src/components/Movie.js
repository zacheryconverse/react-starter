import React from 'react';

let Movie = (props) => {
  return (
    <div className="lines p2-a"> {props.movie.title}</div>
    // <div className="lines p2-a"> {props.jellybean.title}</div>
  )
};

export default Movie;