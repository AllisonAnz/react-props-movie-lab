import React, { Component } from 'react';

export default class CardFront extends Component {
//Deliverable: use the poster prop as a background image, rendering only the necessary HTML
//CardFront is the child comp of MovieCard, it recives its props that were passed from MovieShowcase 
//CardFront has access to the poster props
  render() {
    return (
      <div className="card-front" style={{ backgroundImage: `url(${this.props.posterProp})` }}>
      </div>
    )
  }
}