import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = { 0: zero, 1: one, 2: two, 3: three, 4: four, 5: five }

export default class CardBack extends Component {

  generateRatingElement = () => {
    // implement meeeee! See the readme for instructions
    //renders 'No Rating Found' in an <h4> if the IMDBRating prop is null
    //render an <img> tag if the IMDBRating prop is valid
    if (this.props.IMDBRating !== null) {
      return <img src={imgMapper[this.props.IMDBRating]} alt="" />
    }
    return <h4>No Rating Found</h4>
  }

  render() {
    return (
      <div className="card-back">
        { /* Correctly render the title prop */}
            <h3 className="title">{this.props.titleProp}</h3>

        <span />
        { /* your rating element should go here -- you can invoke methods within JSX, à la: this.myMethod() */}
        { /**/}
            {this.generateRatingElement()}
        <span />

        { /* renders the genres prop as comma seperated strings*/}
        { /* genres is an array, using .join will seprate them with commas */}
      <h5 className="genres">{this.props.genresProp.join(', ')}</h5>
      </div>
    )
  }
}