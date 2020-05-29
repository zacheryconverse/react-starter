import React from 'react';
import Movie from './Movie';


let MovieList = (props) => {
  let message = props.movies.length === 0 ? 'No Movies Found' : '';

  return (
    <div className="p2-t">
      {message}
      {props.movies.map((movie, i) => <Movie movie={movie} key={i} />)}
      {/* {props.peanuts.map((nut, i) => <Movie jellybean={nut} key={i} />)} */}
    </div>
  )
};

export default MovieList;







// let MovieList = (props) => {
//     let entries = props.passedList.map((movie) => (<MovieListEntry film={movie} key={movie.title}/>)) // feed into movie list entry
//     return (
//         <div className="movie-list">
//             {entries}
//         </div>
//     )
// }