import defaultPoster from '../assets/poster-imgs/default.png'
import cmi from '../assets/poster-imgs/choux-and-maru-go-to-istanbul.png'
import cmp1 from '../assets/poster-imgs/choux-and-maru-p1.png'
import cb from '../assets/poster-imgs/chromeboi.png'
import efv from '../assets/poster-imgs/escape-from-vim.png'
import goldeneye from '../assets/poster-imgs/goldeneye.jpg'
import hbmc from '../assets/poster-imgs/handsome-boy-modeling-club.png'
import msts from '../assets/poster-imgs/marus-spinoff-trapped-in-the-sheets.png'
import tkr from '../assets/poster-imgs/terrance-king-of-the-rats.png'
import ttm from '../assets/poster-imgs/the-trash-man.png'

import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';


const posterMap = {
  'choux-maru-istanbul': cmi,
  'choux-maru-part-1': cmp1,
  'chromeboi': cb,
  'escape-from-vim': efv,
  'goldeneye': goldeneye,
  'handsome-boy': hbmc,
  'marus-spinoff': msts,
  'terrance-king': tkr,
  'the-trash-man': ttm,
  'default': defaultPoster
}


export default class MovieCard extends Component {

  render() {
    //you can see that each MovieCard comp, contains different props. pass the props to the two 
    //child comp. of MovieCard. CardFront and CardBack
    console.log(this.props)
    return (
      <div className="movie-card">
        {/* CardFront: make a prop var (posterProp), pass in this.props.poster (this=the class MovieCard, prop=the passed in props from MovieShowcase that we are sending to CardFront) */}
        <CardFront posterProp={posterMap[this.props.poster]}/>
        {/* CardBack renders the title, genre, rating, <img> tag if IMDB Rating prop is valid */}
        {/* name the var titleProp, and pass in MovieCards prop (title) which was inherited from MovieShowcase, and pass it to CardBack */}
        <CardBack titleProp={this.props.title}
                  genresProp={this.props.genres}
                  IMDBRating={this.props.IMDBRating}
                  />
      </div>
    )
  }
}

// Don't forget your default props!
//assign default prop 'unknown' for title prop 
//assign default prop null for IMDBRating prop
//assign default prop ['No Genre(s) Found'] for genres prop
//assign default prop 'default' for poster prop
MovieCard.defaultProps = {
  title: 'Unknown',
  IMDBRating: null,
  genres: ['No Genre(s) Found'],
  poster: 'default'
}