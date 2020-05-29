import React from 'react';
import '../main.css';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

let movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      allMovies: []
    }
    this.findMovie = this.findMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  findMovie(search) {
    let results = movies.filter(movie => {
      return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0});
    this.setState({searchResults: results});
  }

  addMovie(e, movie) {
    e.preventDefault();
    this.setState({
      allMovies: [...this.state.allMovies, {title: movie}],
      searchResults: [...this.state.searchResults, {title: movie}]
    });
  }

  render() {
    return (
    <div>
      <div className="navbar"><h1>MovieList</h1></div>
      <div className="m-rl">
        <AddMovie addMovie={this.addMovie}/>
        <SearchBar movies={movies} findMovie={this.findMovie}/>
        <MovieList movies={this.state.searchResults}/>
        {/* <MovieList peanuts={movies}/> */}
      </div>
    </div>
  )}
}

export default App;






// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       Movies:
//       [
//         {title: 'Mean Girls'},
//         {title: 'Hackers'},
//         {title: 'The Grey'},
//         {title: 'Sunshine'},
//         {title: 'Ex Machina'},
//       ]
//     }
//   }
//   render(){
//     let {Movies} = this.state; // this is destructuring this out of state
//     return(
//     <div>
//       <div>
//         Movie List
//         <MovieList passedList={Movies}/>
//       </div>
//     </div>
//     )
//   }
// }