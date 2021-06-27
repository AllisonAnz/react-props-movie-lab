import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
//Gives access to the movieData in data.js
import movieData from './data.js'
//When everything is set up properly, you'll have 9 empty squares which are 9 MovieCard comp.
//Step2: pass props to the two child components of MovieCard: CardFront and CardBack
  //When you click one and hold your mouse button down, you'll see the card animate and 'turn over'

//Think aboout the structure:
  //Since CardBack and CardFront have specific tasks: display the data the receive as props. 
  //MovieShowCase is where this data is imported 
  //What about MovieCard? 
    //MovieCard acts a container. It does render a div element with a CSS calss 
    //but besides that, its primary purpose is to house the CardFront and CardBack comp. 
export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    //Step1:We want take this data and for every object inside render a MovieCard Component, passing the object data in as props (passing all 4 props)
      //map over each movie in data.js, and an index. 
      //the index is equal to the unique key 
      //create variables(title, IMDBRating ect) and assign prop values (movies.title, movie.genres etc)
    return movieData.map((movie, index) => <MovieCard
          key={index}
          title={movie.title}
          IMDBRating={movie.IMDBRating}
          genres={movie.genres}
          poster={movie.poster}
            />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}